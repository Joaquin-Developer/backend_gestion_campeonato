const { connect, connection, disconnect } = require("../database")

async function queryLogin(username) {
    try {
        // connect()
        const promise = new Promise((resolve, reject) => {
            const query = "select * from User where username = ?" /* and passw = ?" */

            connection.query(query, [username /*, password*/], (error, rows, fields) => {
                if (error) return reject(error)
                return resolve(JSON.stringify(rows))
            })
        })
        // disconnect()
        return promise
    } catch (error) {
        return error
    }
}


module.exports = { login, queryLogin };
