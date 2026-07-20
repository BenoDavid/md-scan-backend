// src/controllers/CFAIMDReportTotalPOQtyController..js
const { Sequelize } = require('sequelize');
const db = require('../models');
const BaseController = require('./BaseController');
const CFAIMDReportTotalPOQty = db.sequelizeDb2.models.CFAIMDReportTotalPOQty;


class CFAIMDReportTotalPOQtyController extends BaseController {
  constructor() {
    super(CFAIMDReportTotalPOQty);
  }
}

module.exports = new CFAIMDReportTotalPOQtyController();


