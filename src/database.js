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
        if (error) throw error;
        console.log("MySQL Database connected!")
    })
}

function disconnect() {
    connection.end(error => {
        if (error) throw error
        console.log("DB connection end")
    })
}

module.exports = { connection, connect, disconnect }
