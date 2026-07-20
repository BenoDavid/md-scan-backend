const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class CFAIMDReportEmp extends Model {}

    CFAIMDReportEmp.init(
        {
            ID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            EmployeeCode: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Factory: {
                type: DataTypes.STRING,
                allowNull: true
            },
            MachineNo: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Calibration: {
                type: DataTypes.STRING,
                allowNull: true
            },
            BeltCleaning: {
                type: DataTypes.STRING,
                allowNull: true
            },
            employeeName: {
                type: DataTypes.STRING,
                allowNull: true
            },
            Shift: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            sequelize,
            modelName: 'CFAIMDReportEmp',
            tableName: 'cfaimdreportemp',
            timestamps: false
        }
    );

    return CFAIMDReportEmp;
};