const matches = {}
const { connect, connection, disconnect } = require("../database")

matches.getAll = () => {
    connect()
    const promise = new Promise((resolve, reject) => {
        connection.query("select * from Game", (error, rows, fields) => {
            if (error) return reject(error)
            // res = Object.values(JSON.parse(JSON.stringify(result)));
            return resolve(rows)

        })
    })
    disconnect()
    return promise
}


module.exports = matches
