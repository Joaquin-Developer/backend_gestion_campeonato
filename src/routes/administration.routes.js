const { Router } = require("express")
const router = Router()
// const controller = require("../controllers/administration.controller")
const jwt = require("jsonwebtoken")

const tokenAuthentication = (req, res, next) => {
    const auth = req.headers.authorization

    if (!auth || !auth.split(" "[1])) {
        return res.status(401).json({ status: false, message: "Missing authorization" })
    }
    const token = auth.split(" ")[1]
    jwt.verify(token, "loginkey")
}

const login = async (req, res) => {
    try {
        const data = JSON.parse(await queryLogin(username, password))

        if (data.length == 0) {
            return { message: "The username doesn't exixts" }
        }
        else if (data[0].passw !== password) {
            return { message: "Incorrect password" }
        } else {
            // valid login:
            const token = jwt.sign({ id: data[0].id}, "loginkey")
            return { token }
        }
    } catch (error) {
        return error
    }
}

router.post("/login", async (req, res) => {
    const { user, passw } = req.body
    const {token, message } = await login(user, passw)

    if (!token) {
        res.status(401).send({ status: false, message: message })
    }
    res.status(200).send({ token })

})

router.get("/newMatches", tokenAuthentication, (req, res) => {
    res.status(200).json({ status: true })
})

module.exports = router