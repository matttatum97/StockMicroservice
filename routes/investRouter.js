const investController = require("../controllers/investController")
const router = require("express").Router()
router.post('/', investController.addInvestment)
router.get('/', investController.getAllInvestments)
router.get('/:id', investController.getOneInvestment)
router.put('/id', investController.updateInvestment)
router.delete('/:id', investController.deleteInvestment)
module.exports = router