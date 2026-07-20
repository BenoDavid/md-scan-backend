// src/controllers/CFAIMDReportEmpController..js
const { Sequelize } = require("sequelize");
const db = require("../models");
const BaseController = require("./BaseController");
const { CFAIMDReportEmp } = db.sequelizeDb3.models;

class CFAIMDReportEmpController extends BaseController {
  constructor() {
    super(CFAIMDReportEmp);
  }
}

module.exports = new CFAIMDReportEmpController();
