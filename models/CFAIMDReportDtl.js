const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class CFAIMDReportDtl extends Model {}

    CFAIMDReportDtl.init(
        {
            PK: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            ID: {
                type: DataTypes.BIGINT,
                allowNull: true
            },
            Style: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Buyer: {
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
            colorQty: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            MDStatus: {
                type: DataTypes.STRING,
                allowNull: true
            },
            ScannedQty: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            BalanceQty: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            CartonQty: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            MetalDetected: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            CreatedOn: {
                type: DataTypes.DATE,
                allowNull: true
            },
            ScanTime: {
                type: DataTypes.TIME,
                allowNull: true
            },
            CreatedBy: {
                type: DataTypes.STRING,
                allowNull: true
            },
            CutNo: {
                type: DataTypes.STRING,
                allowNull: true
            },
            CutQty: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            OCNo: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Line: {
                type: DataTypes.STRING,
                allowNull: true
            },
            CollectedPcs: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            SelectedPcs: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            dtlDate: {
                type: DataTypes.DATEONLY,
                allowNull: true
            },
            Factory: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Shift: {
                type: DataTypes.STRING,
                allowNull: true
            },
            ColorCode: {
                type: DataTypes.STRING,
                allowNull: true
            },
            bundleNumber: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: 'CFAIMDReportDtl',
            tableName: 'cfaimdreportdtl',
            timestamps: false
        }
    );

    return CFAIMDReportDtl;
};