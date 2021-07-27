const Teams = {}
const { connect, connection, disconnect } = require("../database")

Teams.getAll = () => {
    try {
        // connect()
        const promise = new Promise((resolve, reject) => {
            const query = "select NameTeam, NameCoach, Website from Team"
            connection.query(query, (error, rows, fields) => {
                if (error) return reject(error)
                return resolve(rows)
            })
        })
        // disconnect()
        return promise
    } catch (error) { return error }
}

Teams.update = (team) => {
    try {
        const promise = new Promise((resolve, reject) => {
            const query = `update Team set NameTeam = ${team.name}, NameCoach = ${team.coach},
                Website=${team.web} where IdTeam = ${team.id}`

            connection.query(query, (error, rows, fields) => {
                if (error) return reject(error)
                return resolve(rows)
            })
        })
        return promise
    } catch (error) { return error }
}

module.exports = Teams
