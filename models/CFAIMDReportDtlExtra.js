const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class CFAIMDReportDtlExtra extends Model {}

    CFAIMDReportDtlExtra.init(
        {
            pk: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            connectingId: {
                type: DataTypes.BIGINT,
                allowNull: true
            },
            machineno_md_ns: {
                type: DataTypes.STRING,
                allowNull: true
            },
            operatorID: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: 'CFAIMDReportDtlExtra',
            tableName: 'cfaimdreportdtl_macNO_oprno_addtional',
            timestamps: false
        }
    );

    return CFAIMDReportDtlExtra;
};