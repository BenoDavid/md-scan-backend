// src/controllers/CFAIMDReportAdsStylesController..js
const { Sequelize } = require('sequelize');
const db = require('../models');
const BaseController = require('./BaseController');
const CFAIMDReportAdsStyles = db.sequelizeDb2.models.CFAIMDReportAdsStyles;


class CFAIMDReportAdsStylesController extends BaseController {
  constructor() {
    super(CFAIMDReportAdsStyles);
  }
}

module.exports = new CFAIMDReportAdsStylesController();


