const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class CFAIMDReportDtlLatest extends Model {}

  CFAIMDReportDtlLatest.init(
    {
      PK: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ID: {
        type: DataTypes.INTEGER,
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
      colorQty: {
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
      dtlDate: {
        type: DataTypes.DATEONLY,
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
      modelName: "CFAIMDReportDtlLatest",
      tableName: "vw_cfaimdreportdtl_Latest",
      timestamps: false,
    },
  );

  return CFAIMDReportDtlLatest;
};
