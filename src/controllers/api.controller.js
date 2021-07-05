const apiController = {}

apiController.index = (req, res) => {
    res.status(200).json({ "message": "Ok" })
}

module.exports = apiController