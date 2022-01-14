const dbConfig = require("../config/dbConfig")
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
  {
    database: dbConfig.DB,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    dialect: dbConfig.dialect,
    host: dbConfig.HOST
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('connect to Postgres DB')
  })
  .catch(e => {
    console.log("unable to connect to Postgres DB" + e)
  })

  const db = {}

  db.sequelize = sequelize

  db.Stocks = require("./stockModels")(sequelize, DataTypes)
  db.DynamicInfo = require("./dynamicInfoModel")(sequelize, DataTypes)
  db.Invests = require("./investModel")(sequelize, DataTypes)

  db.sequelize.sync({force:true}).then(() => {
    console.log('DB synced with sequelize')
  }).catch((error) => {
    console.log('Error syncng the DB to sequelize' + error)
  })

  db.DynamicInfo.belongsTo(db.Stocks)
  db.Stocks.hasOne(db.DynamicInfo)

  db.Invests.belongsTo(db.Stocks)
  db.Stocks.hasMany(db.Invests)



  module.exports = db