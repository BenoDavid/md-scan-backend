const CFAIMDHandheldRptController = require('../controllers/CFAIMDHandheldRptController');
const BaseRouter = require('./BaseRouter');
const CFAIMDHandheldRptRouter = new BaseRouter(CFAIMDHandheldRptController);

module.exports = CFAIMDHandheldRptRouter.getRouter();
