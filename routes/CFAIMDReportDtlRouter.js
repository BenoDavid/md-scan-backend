const CFAIMDReportDtlController = require('../controllers/CFAIMDReportDtlController');
const BaseRouter = require('./BaseRouter');
const CFAIMDReportDtlRouter = new BaseRouter(CFAIMDReportDtlController);

module.exports = CFAIMDReportDtlRouter.getRouter();
