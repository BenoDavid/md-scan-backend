const EmployeeDetailsController = require("../controllers/EmployeeDetailsController");
const BaseRouter = require("./BaseRouter");
const EmployeeDetailsRouter = new BaseRouter(EmployeeDetailsController);

module.exports = EmployeeDetailsRouter.getRouter();
