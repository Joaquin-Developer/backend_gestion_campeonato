const apiController = {}
const Matches = require("../modules/Matches")
const { getJsonError } = require("../database")

apiController.index = (req, res) => {
    res.status(200).json({ "message": "Ok" })
}

apiController.getAll = async (req, res) => {
    try {
        const result = await Matches.getAll()
        res.status(200).json(result)

    } catch(error) {
        res.status(500).json(getJsonError(error))
    }
}

apiController.allMatchesFromSerie = async (req, res) => {
    const seriename = req.params.seriename
    try {
        const result = await Matches.getAllMatchesFromSerie(seriename)
        console.log(result)
        res.status(200).json(result)

    } catch (error) { res.status(500).json(getJsonError(error)) }
}

module.exports = apiController