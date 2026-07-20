const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class CFAIMDReportAdsStyles extends Model {}

    CFAIMDReportAdsStyles.init(
        {
            ID: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false
            },
            StyleName: {
                type: DataTypes.STRING,
                allowNull: true
            },
            PO: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Color: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Qty: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            buyer: {
                type: DataTypes.STRING,
                allowNull: true
            },
            shipmentDate: {
                type: DataTypes.DATE,
                allowNull: true
            },
            Total_Po_Qty: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: 'CFAIMDReportAdsStyles',
            tableName: 'cfaimdreportadsstyles',
            timestamps: false
        }
    );

    return CFAIMDReportAdsStyles;
};