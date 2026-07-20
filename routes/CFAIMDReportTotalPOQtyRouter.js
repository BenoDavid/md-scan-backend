const CFAIMDReportTotalPOQtyController = require('../controllers/CFAIMDReportTotalPOQtyController');
const BaseRouter = require('./BaseRouter');
const CFAIMDReportTotalPOQtyRouter = new BaseRouter(CFAIMDReportTotalPOQtyController);

module.exports = CFAIMDReportTotalPOQtyRouter.getRouter();
