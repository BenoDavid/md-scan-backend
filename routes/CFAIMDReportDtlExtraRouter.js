const CFAIMDReportDtlExtraController = require('../controllers/CFAIMDReportDtlExtraController');
const BaseRouter = require('./BaseRouter');
const CFAIMDReportDtlExtraRouter = new BaseRouter(CFAIMDReportDtlExtraController);

module.exports = CFAIMDReportDtlExtraRouter.getRouter();
