const CFAIMDReportController = require('../controllers/CFAIMDReportController');
const BaseRouter = require('./BaseRouter');
const CFAIMDReportRouter = new BaseRouter(CFAIMDReportController);

module.exports = CFAIMDReportRouter.getRouter();
