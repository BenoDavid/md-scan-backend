// src/controllers/SCDepartmentController.js
const db = require("../models");
const BaseController = require("./BaseController");
const vwOrderStyles = db.sequelizeDb1.models.vwOrderStyles;
const { Op } = require("sequelize"); // Import Op for operators

class vwOrderStylesController extends BaseController {
  constructor() {
    super(vwOrderStyles);
  }
  async getAll(req, res) {
    try {
      // Extract query parameters for pagination, filtering, and sorting
      const {
        fromDate,
        toDate,
        page = 1,
        limit = 10000,
        style,
        ...filters
      } = req.query;

      // Set up pagination
      const offset = (page - 1) * limit;
      const paginationOptions = {
        offset: parseInt(offset),
        limit: parseInt(limit),
      };

      // Set up filtering
      const filterOptions = {};
      for (const key in filters) {
        if (filters[key] === "null") {
          filterOptions[key] = null;
        } else {
          filterOptions[key] = filters[key];
        }
      }

      if (fromDate && toDate) {
        const startDate = new Date(fromDate);
        const endDate = new Date(toDate);

        // Adjust endDate to include the entire day
        endDate.setHours(23, 59, 59, 999);

        filterOptions.createdAt = {
          [Op.between]: [startDate, endDate],
        };
      }

      // Conditionally add StyleNumber filter if the parameter is provided
      if (style) {
        filterOptions.StyleNumber = {
          [Op.like]: `${style}%`, // Fetch records where StyleNumber starts with the provided value
        };
      }

      // Fetch data based on the filters and pagination options
      const items = await this.model.findAll({
        where: filterOptions,
        attributes: [
          "OrderRef",
          "StyleNumber",
          "Color",
          "SONumber",
          "OrderQty",
          "ColorCode",
          "CustomerCode",
        ], // Select only the required fields
        // order: sortOptions, // If you want to add sorting, uncomment and define sortOptions
        ...paginationOptions,
      });

      // Calculate total OrderQty
      const totalOrderQty = items.reduce(
        (total, item) => total + Number(item.OrderQty || 0),
        0,
      );

      // Respond with data and pagination metadata
      res.status(200).json({
        status: 200,
        message: `${this.model.name}s fetched successfully`,
        result: items,
        totalOrderQty: totalOrderQty,
        pagination: {
          totalItems: items.length,
          currentPage: page,
          pageSize: limit,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
        result: [],
      });
    }
  }
}

module.exports = new vwOrderStylesController();
