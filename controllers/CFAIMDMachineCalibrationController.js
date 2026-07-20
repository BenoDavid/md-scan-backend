// src/controllers/CFAIMDHandheldRptController..js
const { Sequelize } = require("sequelize");
const db = require("../models");
const BaseController = require("./BaseController");
const { CFAIMDMachineCalibration } = db.sequelizeDb3.models;

class CFAIMDMachineCalibrationController extends BaseController {
  constructor() {
    super(CFAIMDMachineCalibration);
  }
  async getAll(req, res) {
    try {
      // Extract query parameters for pagination, filtering, and sorting
      const {
        fromDate,
        toDate,
        page = 1,
        limit = 10,
        sortBy = "CalibrationDate",
        sortOrder = "DESC",
        ...filters
      } = req.query;

      // Set up pagination
      // const offset = (page - 1) * limit;
      // const paginationOptions = { offset: parseInt(offset), limit: parseInt(limit) };

      // Set up sorting
      const sortOptions = [[sortBy, sortOrder.toUpperCase()]];

      // Set up filtering
      const filterOptions = {};
      for (const key in filters) {
        if (filters[key] == "null") {
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

        filterOptions.CalibrationDate = {
          [Sequelize.Op.between]: [startDate, endDate],
        };
      }
      // Combine all options and fetch data
      const items = await this.model.findAndCountAll({
        where: filterOptions,
        // order: sortOptions,
        // ...paginationOptions
      });

      // Respond with paginated data and metadata
      res.status(200).json({
        status: 200,
        message: `${this.model.name}s fetched successfully`,
        result: items.rows,
        pagination: {
          totalItems: items.count,
          totalPages: Math.ceil(items.count / limit),
          currentPage: parseInt(page),
          pageSize: parseInt(limit),
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
  async getOneByCustomKey(req, res) {
    try {
      // Extract query parameters for pagination, filtering, and sorting

      const { employeeCode } = req.body;
      // Combine all options and fetch data
      const employeeDetails = await db.sequelizeDb2.query(
        `
      SELECT *
      FROM OPENQUERY(
          trendzv4n,
          'SELECT *
           FROM HCM.HCM_EMPLOYEE_DETAILS_V
           WHERE EMPLOYEE_CODE = ''${employeeCode}'''
      )
      `,
        {
          type: QueryTypes.SELECT,
        },
      );

      if (!employeeDetails || !employeeDetails.length) {
        return res.status(404).json({
          status: 404,
          message: "Employee not found",
          result: {},
        });
      }

      // Respond with paginated data and metadata
      res.status(200).json({
        status: 200,
        message: `${this.model.name} fetched successfully`,
        result: employeeDetails[0],
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
        result: {},
      });
    }
  }
  async create(req, res) {
    try {
      const item = await this.model.create(req.body);
      res.status(200).json({
        status: 200,
        message: `${this.model.name} created successfully`,
        result: item,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
        result: {},
      });
    }
  }
  async update(req, res) {
    try {
      const [updated] = await this.model.update(req.body, {
        where: { ID: req.params.id },
      });
      if (updated) {
        const item = await this.model.findByPk(req.params.id);
        res.status(200).json({
          status: 200,
          message: `${this.model.name}s updated successfully`,
          result: item,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
        result: {},
      });
    }
  }
}

module.exports = new CFAIMDMachineCalibrationController();
