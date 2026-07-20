const CFAIMDReportGiaViewController = require('../controllers/CFAIMDReportGiaViewController');
const BaseRouter = require('./BaseRouter');
const CFAIMDReportGiaViewRouter = new BaseRouter(CFAIMDReportGiaViewController);

module.exports = CFAIMDReportGiaViewRouter.getRouter();
