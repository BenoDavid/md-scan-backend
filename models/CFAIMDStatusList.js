const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class CFAIMDStatusList extends Model {}

  CFAIMDStatusList.init(
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      MDStatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "CFAIMDStatusList",
      tableName: "cfaimdstatuslist",
      timestamps: false,
    },
  );

  return CFAIMDStatusList;
};
