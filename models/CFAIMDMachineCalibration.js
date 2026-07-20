const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class CFAIMDMachineCalibration extends Model {}

  CFAIMDMachineCalibration.init(
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      CalibrationTime: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      MachineNo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Calibration: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      A1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      A2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      A3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      A4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      A5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      A6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      A7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      A8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      A9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      BeltCleaning: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CalibrationDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      CreatedOn: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      CreatedBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      TimeOfCalibration: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      EmployeeCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      employeename: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Factory: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Shift: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "CFAIMDMachineCalibration",
      tableName: "cfaimdmachinecalibration",
      timestamps: false,
    },
  );

  return CFAIMDMachineCalibration;
};
