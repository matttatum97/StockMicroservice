const dbConfig = require("../config/dbConfig")
const {Sequelize, DataTypes} = require('sequelize')

let sequelize = null;

    if (process && process.env.DATABASE_URL) {
        sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
              ssl: {
                  require: true,
                  rejectUnauthorized: false
                  }
              }
            }
        );
    } else {
       sequelize = new Sequelize(
        { // use imported configurations from dbConfig
            database: dbConfig.DB,
            username: dbConfig.USER,
            password: dbConfig.PASSWORD,
            dialect: dbConfig.dialect,
            host: dbConfig.HOST,
            dialectOptions: {
              ssl: {
                require: true,
                rejectUnauthorized: false
              }
            }
        })
    }

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

  db.sequelize.sync({force:false}).then(() => {
    console.log('DB synced with sequelize')
  }).catch((error) => {
    console.log('Error syncng the DB to sequelize' + error)
  })

  db.DynamicInfo.belongsTo(db.Stocks)
  db.Stocks.hasOne(db.DynamicInfo)

  db.Invests.belongsTo(db.Stocks)
  db.Stocks.hasMany(db.Invests)



  module.exports = db