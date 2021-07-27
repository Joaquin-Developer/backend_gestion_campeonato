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

controller.update = async (req, res) => {
    const { id, name, coach, web} = req.body
    try {
        const result = await Teams.update({ id, name, coach, web })
        res.status(200).json({ status: true })
    } catch(error) {
        res.status(500).json({ status: false, message: "internal server error." })
    }

}


module.exports = controller