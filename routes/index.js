
const express = require('express');
const router = express.Router();


const vwOrderStylesRouter = require('./vwOrderStylesRouter');
const EmployeeDetailsRouter = require('./EmployeeDetailsRouter');


const CFAIMDHandheldRptRouter = require('./CFAIMDHandheldRptRouter');
const CFAIMDMachineCalibrationRouter = require('./CFAIMDMachineCalibrationRouter');
const CFAIMDReportAdsStylesRouter = require('./CFAIMDReportAdsStylesRouter');
const CFAIMDReportDtlExtraRouter = require('./CFAIMDReportDtlExtraRouter');
const CFAIMDReportDtlRouter = require('./CFAIMDReportDtlRouter');
const CFAIMDReportEmpRouter = require('./CFAIMDReportEmpRouter');
const CFAIMDReportGiaViewRouter = require('./CFAIMDReportGiaViewRouter');
const CFAIMDReportTotalPOQtyRouter = require('./CFAIMDReportTotalPOQtyRouter');
const CFAIMDStatusListRouter = require('./CFAIMDStatusListRouter');
const CFAIMDReportRouter = require('./CFAIMDReportRouter');
const CFAIMDReportDtlLatestRouter = require('./CFAIMDReportDtlLatestRouter');


router.use('/handheld', CFAIMDHandheldRptRouter);
router.use('/calibration', CFAIMDMachineCalibrationRouter);
router.use('/adsstyles', CFAIMDReportAdsStylesRouter);
router.use('/details', CFAIMDReportDtlExtraRouter);
router.use('/detailreport', CFAIMDReportDtlRouter);
router.use('/emp', CFAIMDReportEmpRouter);
router.use('/giaview', CFAIMDReportGiaViewRouter);
router.use('/totalpoqty', CFAIMDReportTotalPOQtyRouter);
router.use('/statuslist', CFAIMDStatusListRouter);
router.use('/report', CFAIMDReportRouter);
router.use('/vos', vwOrderStylesRouter);
router.use('/auth', EmployeeDetailsRouter);
router.use('/latest', CFAIMDReportDtlLatestRouter);


module.exports = router;
