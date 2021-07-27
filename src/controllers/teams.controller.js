const controller = {}
const Teams = require("../modules/Teams")

const { getJsonError } = require("../database")

controller.getAll = async (req, res) => {
    try {
        const result = await Teams.getAll()
        res.status(200).json(result)

    } catch(error) {
        res.status(500).json(getJsonError(error))
    }
}


module.exports = controller