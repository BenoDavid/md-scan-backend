// src/controllers/    EmployeeDetailsController..js
const db = require("../models");
const employeeDetail = db.sequelizeDb3.models.employeeDetail;
const BaseController = require('./BaseController');
const { QueryTypes } = require("sequelize");
class EmployeeDetailsController extends BaseController{
    constructor() {
    super(employeeDetail);
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
}

module.exports = new EmployeeDetailsController();
