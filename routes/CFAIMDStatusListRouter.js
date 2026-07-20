const CFAIMDStatusListController = require('../controllers/CFAIMDStatusListController');
const BaseRouter = require('./BaseRouter');
const CFAIMDStatusListRouter = new BaseRouter(CFAIMDStatusListController);

module.exports = CFAIMDStatusListRouter.getRouter();
