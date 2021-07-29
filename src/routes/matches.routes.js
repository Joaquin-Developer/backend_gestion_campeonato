const { Router } = require("express")
const router = Router()
const controller = require("../controllers/matches.controller")

router.get("/", controller.index)
router.get("/getAll", controller.getAll)
router.get("/allMatchesFromSerie:seriename", controller.allMatchesFromSerie)
router.get("/getAllMatchesOfAllSeries", controller.getAllMatchesOfAllSeries)

module.exports = router
