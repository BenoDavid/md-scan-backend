const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class CFAIMDHandheldRpt extends Model {}

  CFAIMDHandheldRpt.init(
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      CreatedDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      TimeOfEntry: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Style: {
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
      SensitivityCheckDistance: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      NoOfPcs: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      NotRemovedPcs: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      RemovedPcs: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      NotRemoved: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CreatedOn: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      POQty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      employeecode: {
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
      modelName: "CFAIMDHandheldRpt",
      tableName: "cfaimdhandheldrpt",
      timestamps: false,
    },
  );

  return CFAIMDHandheldRpt;
};
