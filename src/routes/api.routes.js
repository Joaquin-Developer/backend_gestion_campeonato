const { Router } = require("express")
const router = Router()
const controller = require("../controllers/api.controller")

router.get("/", controller.index)

module.exports = router
