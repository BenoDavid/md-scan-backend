const CFAIMDMachineCalibrationController = require('../controllers/CFAIMDMachineCalibrationController');
const BaseRouter = require('./BaseRouter');
const CFAIMDMachineCalibrationRouter = new BaseRouter(CFAIMDMachineCalibrationController);

module.exports = CFAIMDMachineCalibrationRouter.getRouter();
