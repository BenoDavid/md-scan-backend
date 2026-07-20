const CFAIMDReportEmpController = require('../controllers/CFAIMDReportEmpController');
const BaseRouter = require('./BaseRouter');
const CFAIMDReportEmpRouter = new BaseRouter(CFAIMDReportEmpController);

module.exports = CFAIMDReportEmpRouter.getRouter();
