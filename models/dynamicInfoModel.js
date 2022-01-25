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
            allowNull: true
        },
        netChange: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        percentChange: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        marketCap: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        volume: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        stockId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
    return DynamicInfo
}