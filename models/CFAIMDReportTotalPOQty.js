const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class CFAIMDReportTotalPOQty extends Model {}

    CFAIMDReportTotalPOQty.init(
        {
            Pk: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            connectingId_ttlPOQty: {
                type: DataTypes.BIGINT,
                allowNull: true
            },
            Total_Po_Qty: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: 'CFAIMDReportTotalPOQty',
            tableName: 'cfaiMdReportTotalPOQty',
            timestamps: false
        }
    );

    return CFAIMDReportTotalPOQty;
};