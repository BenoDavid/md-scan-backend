"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class vwOrderStyles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  vwOrderStyles.init(
    {
      OrderLineId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      CustomerCode: {
        //BRAND
        type: DataTypes.STRING,
      },
      SONumber: {
        //OC
        type: DataTypes.STRING,
      },
      OrderRef: {
        //PO
        type: DataTypes.STRING,
      },
      StyleNumber: {
        //STYLE
        type: DataTypes.STRING,
      },
      Color: {
        //COLOR
        type: DataTypes.STRING,
      },
      ColorCode: {
        //OC
        type: DataTypes.STRING,
      },
      OrderQty: {
        //ORDERQTY
        type: DataTypes.BIGINT,
      },
    },
    {
      sequelize,
      modelName: "vwOrderStyles",
      tableName: "vwOrderStyles",
      timestamps: false,
    },
  );
  return vwOrderStyles;
};
