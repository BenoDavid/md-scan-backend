const CFAIMDWorkCenterController = require("../controllers/CFAIMDWorkCenterController");
const BaseRouter = require("./BaseRouter");
const CFAIMDWorkCenterRouter = new BaseRouter(CFAIMDWorkCenterController);

module.exports = CFAIMDWorkCenterRouter.getRouter();
