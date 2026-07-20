const vwOrderStylesController = require('../controllers/vwOrderStylesController');
const BaseRouter = require('./BaseRouter');
const vwOrderStylesRouter = new BaseRouter(vwOrderStylesController);

module.exports = vwOrderStylesRouter.getRouter();
