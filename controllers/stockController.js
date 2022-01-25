const db = require("../models/index")

const Stock = db.Stocks
const DynamicInfo = db.DynamicInfo

const addStock = async (req, res) => {
    let input_data = {
        symbol: req.body.symbol,
        name: req.body.name,
        country: req.body.country,
        ipoYear: req.body.ipoYear,
        sector: req.body.sector,
        industry: req.body.industry

    }
    let stock = await Stock.create(input_data).then(async (data) => { 
        console.log(data)
        let moreInput_data = {
            lastSale: req.body.lastSale,
            netChange: req.body.netChange,
            percentChange: req.body.percentChange,
            marketCap: req.body.marketCap,
            volume: req.body.volume,
            stockId: data.dataValues.id
        }
        let dynamicInfo = await DynamicInfo.create(moreInput_data).catch(e => console.log(e))
    })
    res.status(200).send(stock)
}

const getAllStocks = async (req, res) => {
    let stocks = await Stock.findAll({
        include: db.DynamicInfo
    })
    res.status(200).send(stocks)
}

const getOneStock = async (req, res) => {
    let id = req.params.id
    let stock = await Stock.findOne({where: {id: id}, include: db.DynamicInfo})
    res.status(200).send(stock)
}

const updateStock = async (req, res) => {
    let id = req.params.id
    let stock = await Stock.update(req.body, {where: {id: id}})
    res.status(200).send(stock)
}

const deleteStock = async (req, res) => {
    let id = req.params.id
    await DynamicInfo.destroy({where: {id:id}})
    await Stock.destroy({where: {id: id}})
    res.status(200).send(`Stock with Id ${id} has been deleted`)
}







module.exports = {
    addStock,
    getAllStocks,
    getOneStock,
    updateStock,
    deleteStock
}