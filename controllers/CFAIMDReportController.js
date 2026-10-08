// src/controllers/CFAIMDReportController..js
const { Sequelize } = require("sequelize");
const db = require("../models");
const BaseController = require("./BaseController");
const { CFAIMDReport } = db.sequelizeDb3.models;

class CFAIMDReportController extends BaseController {
  constructor() {
    super(CFAIMDReport);
  }
  // async getAll(req, res) {
  //   try {
  //     // Extract query parameters for pagination, filtering, and sorting
  //     const {
  //       fromDate,
  //       toDate,
  //       page = 1,
  //       limit = 500,
  //       sortBy = "dtlDate",
  //       sortOrder = "DESC",
  //       ...filters
  //     } = req.query;

  //     // Set up pagination
  //     const offset = (page - 1) * limit;
  //     const paginationOptions = {
  //       offset: parseInt(offset),
  //       limit: parseInt(limit),
  //     };

  //     // Set up sorting
  //     const sortOptions = [[sortBy, sortOrder.toUpperCase()]];

  //     // Set up filtering
  //     const filterOptions = {};
  //     for (const key in filters) {
  //       if (filters[key] == "null") {
  //         filterOptions[key] = null;
  //       } else {
  //         filterOptions[key] = filters[key];
  //       }
  //     }
  //     if (fromDate && toDate) {
  //       const startDate = new Date(fromDate);
  //       const endDate = new Date(toDate);

  //       // Adjust endDate to include the entire day
  //       endDate.setHours(23, 59, 59, 999);

  //       filterOptions.dtlDate = {
  //         [Sequelize.Op.between]: [startDate, endDate],
  //       };
  //     }

  //     // Combine all options and fetch data
  //     // const items = await this.model.findAndCountAll({
  //     //   where: filterOptions,

  //     //   order: sortOptions,
  //     //   ...paginationOptions,
  //     // });
  //     const items = await this.model.findAll({
  //       where: filterOptions,
  //       order: sortOptions,
  //       ...paginationOptions,
  //       raw: true,
  //     });

  //     // Respond with paginated data and metadata
  //     res.status(200).json({
  //       status: 200,
  //       message: `${this.model.name}s fetched successfully`,
  //       result: items.rows,
  //       // pagination: {
  //       //   totalItems: items.count,
  //       //   totalPages: Math.ceil(items.count / limit),
  //       //   currentPage: parseInt(page),
  //       //   pageSize: parseInt(limit),
  //       // },
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       status: 500,
  //       message: error.message,
  //       result: [],
  //     });
  //   }
  // }
  async getAll(req, res) {
  try {
    const {
      fromDate,
      toDate,
      page = 1,
      limit = 100,
      sortBy = "dtlDate",
      sortOrder = "DESC",
      ...filters
    } = req.query;

    const pageNumber = Math.max(parseInt(page, 10) || 1, 1);
    const pageLimit = Math.min(
      Math.max(parseInt(limit, 10) || 100, 1),
      500
    );

    const offset = (pageNumber - 1) * pageLimit;

    const filterOptions = {};

    // Add normal filters
    for (const key in filters) {
      if (
        filters[key] !== undefined &&
        filters[key] !== "" &&
        filters[key] !== "null"
      ) {
        filterOptions[key] = filters[key];
      }
    }

    // Date filter
    if (fromDate && toDate) {
      const startDate = new Date(fromDate);
      const endDate = new Date(toDate);

      endDate.setHours(23, 59, 59, 999);

      filterOptions.dtlDate = {
        [Sequelize.Op.between]: [startDate, endDate],
      };
    }

    const items = await this.model.findAll({
      where: filterOptions,

      attributes: [
        "CreatedOn",
        "Buyer",
        "Style",
        "PO",
        "Color",
        "Qty",
        "Total_Po_Qty",
        "MDStatus",
        "ScannedQty",
        "BalanceQty",
        "CartonQty",
        "CutNo",
        "bundleNumber",
        "CutQty",
        "EmployeeCode",
        "MachineNo",
        "OCNo",
        "Passed",
        "SelectedPcs",
        "operatorID",
        "machineno_md_ns",
        "MetalDetected",
        "Line",
        "Factory",
        "CollectedPcs",
        "Calibration",
        "BeltCleaning",
      ],

      order: [["CreatedOn", "DESC"]],

      limit: pageLimit,
      offset,

      raw: true,
    });

    return res.status(200).json({
      status: 200,
      message: `${this.model.name}s fetched successfully`,
      result: items,
      // pagination: {
      //   currentPage: pageNumber,
      //   pageSize: pageLimit,
      //   hasMore: items.length === pageLimit,
      // },
    });
  } catch (error) {
    console.error("MD Report Error:", error);

    return res.status(500).json({
      status: 500,
      message: error.message,
      result: [],
    });
  }
}
  async update(req, res) {
    try {
      const [updated] = await this.model.update(req.body, {
        where: { SL_NO: req.params.id },
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

module.exports = new CFAIMDReportController();
