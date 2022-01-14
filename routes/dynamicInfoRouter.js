const dynamicInfoController = require("../controllers/dynamicInfoController")
const router = require("express").Router()
router.post("/", dynamicInfoController.addDynamicInfo)
router.get("/", dynamicInfoController.findAllDynamicInfo)
router.get("/:id", dynamicInfoController.findOneDynamicInfo)
router.put("/:id", dynamicInfoController.updateDynamicInfo)
router.delete("/:id", dynamicInfoController.deleteDynamicInfo)

module.exports = router
