const db = require("../models/index")
const Investment = db.Invests
console.log(db)

const addInvestment = async (req, res) => {
    let input_data = {
        id: req.body.id,
        userId: req.body.userId,
        stockId: req.body.stockId,
        numShares: req.body.numShares
    }
    let investment = await Investment.create(input_data)
    res.status(200).send(investment)
}

const getAllInvestments = async (req, res) => {
    let investments = await Investment.findAll({
        include: db.Stocks
    })
    res.status(200).send(investments)
}

const getOneInvestment = async (req, res) => {
    let id = req.params.id
    let investment = await Investment.findOne({where: {id: id}, include: db.Stocks})
    res.status(200).send(investment)
}

const updateInvestment = async (req, res) => {
    let id = req.params.id
    let investment = await Investment.update(req.body, {where: {id: id}})
    res.status(200).send(investment)
}

const deleteInvestment = async (req, res) => {
    let id = req.params.id
    await Investment.destroy({where: {id: id}})
    res.status(200).send(`Stock with Id ${id} has been deleted`)
}

module.exports = {
    addInvestment,
    getAllInvestments,
    getOneInvestment,
    updateInvestment,
    deleteInvestment
}
