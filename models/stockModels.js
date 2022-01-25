module.exports = (sequelize, DataTypes) => {
    const Stock = sequelize.define('stock', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ipoYear: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sector: {
            type: DataTypes.STRING,
            allowNull: true
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: true
        }

    })
    return Stock
}