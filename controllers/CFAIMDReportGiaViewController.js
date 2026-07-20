// src/controllers/CFAIMDReportGiaViewController..js
const { Sequelize } = require('sequelize');
const db = require('../models');
const BaseController = require('./BaseController');
const CFAIMDReportGiaView = db.sequelizeDb2.models.CFAIMDReportGiaView;


class CFAIMDReportGiaViewController extends BaseController {
  constructor() {
    super(CFAIMDReportGiaView);
  }
}

module.exports = new CFAIMDReportGiaViewController();


