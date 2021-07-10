const apiController = {}
const Matches = require("../modules/Matches")

apiController.index = (req, res) => {
    res.status(200).json({ "message": "Ok" })
}

apiController.getAll = async (req, res) => {
    try {
        const result = await Matches.getAll()
        console.log(result)
        res.status(200).json(result)
    } catch(e) {
        res.status(500).json({ error: e })
    }
}

module.exports = apiController