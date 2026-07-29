const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class CFAIMDWorkCenter extends Model {}

  CFAIMDWorkCenter.init(
    {
      FacilityCode: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      Facility: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      WorkcenterCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Workcenter: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "CFAIMDWorkCenter",
      tableName: "vwWorkCenters",
      timestamps: false,
    },
  );

  return CFAIMDWorkCenter;
};
