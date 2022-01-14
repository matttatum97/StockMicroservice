const db = require("../models/index")

const DynamicInfo = db.DynamicInfo

const addDynamicInfo = async (req, res) => {
    let input_data = {
        lastSale: req.body.lastSale,
        netChange: req.body.netChange,
        percentChange: req.body.percentChange,
        marketCap: req.body.marketCap,
        volume: req.body.volume,
        stockId: req.body.stockId
    }
    let dynamicInfo = await DynamicInfo.create(input_data)
    res.status(200).send(dynamicInfo)
}
const findAllDynamicInfo = async (req, res) => {
    let dynamicInfo = await DynamicInfo.findAll({})
    res.status(200).send(dynamicInfo)
}

const findOneDynamicInfo = async (req, res) => {
    let id = req.params.id
    let dynamicInfo = await DynamicInfo.findOne({where:{id: id}})
    res.status(200).send(dynamicInfo)
}

const updateDynamicInfo = async (req, res) => {
    let id = req.params.id
    let dynamicInfo = await DynamicInfo.update(req.body, {where: {id: id}})
    res.status(200).send(dynamicInfo)
}

const deleteDynamicInfo = async (req, res) => {
    let id = req.params.id
    await DynamicInfo.destroy({where: {id:id}})
    res.status(200).send(`Stock with Id ${id} has been deleted`)
}



module.exports = {
    addDynamicInfo,
    findAllDynamicInfo,
    findOneDynamicInfo,
    updateDynamicInfo,
    deleteDynamicInfo
}