const CFAIMDReportAdsStylesController = require('../controllers/CFAIMDReportAdsStylesController');
const BaseRouter = require('./BaseRouter');
const CFAIMDReportAdsStylesRouter = new BaseRouter(CFAIMDReportAdsStylesController);

module.exports = CFAIMDReportAdsStylesRouter.getRouter();
