module.exports = (sequelize, DataTypes) => {
    const DynamicInfo = sequelize.define('dynamicInfo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        lastSale: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        netChange: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        percentChange: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        marketCap: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        volume: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stockId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return DynamicInfo
}