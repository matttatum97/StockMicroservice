module.exports = (sequelize, DataTypes) => {
    const Invest = sequelize.define ('invest', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stockId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numShares: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Invest
}