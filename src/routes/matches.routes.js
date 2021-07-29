const { Router } = require("express")
const router = Router()
const controller = require("../controllers/matches.controller")

router.get("/", controller.index)
router.get("/getAll", controller.getAll)
router.get("/allMatchesFromSerie:seriename", controller.allMatchesFromSerie)

module.exports = router
