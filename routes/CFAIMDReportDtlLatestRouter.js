const CFAIMDReportDtlLatestController = require("../controllers/CFAIMDReportDtlLatestController");
const BaseRouter = require("./BaseRouter");
const CFAIMDReportDtlLatestRouter = new BaseRouter(
  CFAIMDReportDtlLatestController,
);

module.exports = CFAIMDReportDtlLatestRouter.getRouter();
