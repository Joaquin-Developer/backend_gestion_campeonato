const { Router } = require("express")
const router = Router()
const { queryLogin } = require("../modules/Administration")
const jwt = require("jsonwebtoken")

const tokenAuthentication = (req, res, next) => {
    const auth = req.headers.authorization

    if (!auth || !auth.split(" "[1])) {
        return res.status(401).json({ status: false, message: "Missing authorization" })
    }
    const token = auth.split(" ")[1]
    try {
        const data = jwt.verify(token, "logkey")
        req.userId = data.id
        next()
    } catch (error) {
        res.status(401).json({ status: false, message: "Incorrect authorization" })
    }
    
}

const login = async (username, password) => {
    try {
        const data = JSON.parse(await queryLogin(username, password))

        if (data.length == 0) {
            return { message: "The username doesn't exixts" }
        }
        else if (data[0].passw !== password) {
            return { message: "Incorrect password" }
        } else {
            // valid login:
            const token = jwt.sign({ id: data[0].id}, "logkey")
            return { token }
        }
    } catch (error) {
        return error
    }
}

router.post("/login", async (req, res) => {
    const { username, passw } = req.body
    const {token, message } = await login(username, passw)

    if (!token) {
        res.status(401).send({ status: false, message: message })
    }
    res.status(200).send({ token })

})

router.get("/newMatches", tokenAuthentication, (req, res) => {
    res.status(200).json({ status: true })
})

module.exports = router