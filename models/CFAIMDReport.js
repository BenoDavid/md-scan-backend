const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class CFAIMDReport extends Model {}

  CFAIMDReport.init(
    {
      employeeName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      EmployeeCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Factory: {
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
      BeltCleaning: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      EmpID: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "Emp ID",
      },

      PK: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: true,
      },
      ID: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      Style: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Buyer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      PO: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Color: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Qty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      MDStatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ScannedQty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      BalanceQty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CartonQty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      MetalDetected: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      CreatedOn: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ScanTime: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      CreatedBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CutNo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CutQty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      OCNo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Line: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CollectedPcs: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      SelectedPcs: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dtlDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      Passed: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      connectingId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      machineno_md_ns: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      operatorID: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      connectingId_ttlPOQty: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      Total_Po_Qty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Shift: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Time: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      Date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      bundleNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "CFAIMDReport",
      tableName: "VwCFAIMDReport",
      timestamps: false,
    //   freezeTableName: true,
    },
  );

  return CFAIMDReport;
};
