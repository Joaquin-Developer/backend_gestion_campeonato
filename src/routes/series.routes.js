const { Router } = require("express")
const router = Router()
// const controller = require("../controllers/matches.controller")

router.get("/", function(req, res) { res.json({status: true}) })

module.exports = router