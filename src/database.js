const mysql = require("mysql")
const config = require("../config")

const connection = mysql.createConnection({
    host: (config.inProduction) ? process.env.DB_HOST : config.database.DB_HOST,
    user: (config.inProduction) ? process.env.DB_USER : config.database.DB_USER,
    password: (config.inProduction) ? process.env.DB_PASSWORD : config.database.DB_PASSWORD,
    database: (config.inProduction) ?  process.env.DB_NAME : config.database.DB_NAME
});

function connect() {
    connection.connect(error => {
        if (error) return error
        console.log("MySQL Database connected!")
    })
}

function disconnect() {
    connection.end(error => {
        if (error) return error
        console.log("DB connection end")
    })
}

function getJsonError(error) {
    console.log(`Error code: ${error.code}, Error errno: ${error.errno}, fatal: ${error.fatal}`)

    if (error.code.toUpperCase() === "ECONNREFUSED") {
        return ({ error: true, message: "Internal error. Could not connect to the database" })
    }
    if (error.code.toUpperCase() === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR") {
        return { error: true, message: "Internal Error. Could not query the database" }
    }
    // add more controllers ...
    return { error: true, message: error }
}

connect()

module.exports = { connection, connect, disconnect, getJsonError }
