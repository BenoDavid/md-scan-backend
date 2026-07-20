// src/controllers/CFAIMDReportDtlExtra..js
const { Sequelize } = require('sequelize');
const db = require('../models');
const BaseController = require('./BaseController');
const CFAIMDReportDtlExtra = db.sequelizeDb2.models.CFAIMDReportDtlExtra;


class CFAIMDReportDtlExtraController extends BaseController {
  constructor() {
    super(CFAIMDReportDtlExtra);
  }
}

module.exports = new CFAIMDReportDtlExtraController();


