const matches = {}
const { connect, connection, disconnect } = require("../database")

matches.getAll = () => {
    try {
        // connect()
        const promise = new Promise((resolve, reject) => {
            connection.query("select * from Game", (error, rows, fields) => {
                if (error) return reject(error)
                // res = Object.values(JSON.parse(JSON.stringify(result)));
                return resolve(rows)
    
            })
        })
        // disconnect()
        return promise
    } catch (error) {
        return error
    }
    
}

matches.getSeriesData = () => {
    try {
        const promise = new Promise((resolve, reject) => {

            sqlQuery = ``

            connection.query(sqlQuery, (error, rows, fields) => {
                if (error) return reject(error)
                return resolve(rows)
            })
        })
        return promise
    } catch (error) {
        return error
    }
}

matches.getAllMatchesFromSerie = (serieName) => {
    try {
        const promise = new Promise((resolve, reject) => {

            sqlQuery = `select t1.NameTeam "Team1", g.GoalsTeam1, t2.NameTeam "Team2", g.GoalsTeam2
                from (Game as g join Game_Teams as gt on(g.IdGame=gt.IdGame)
                join Team as t1 on(gt.IdTeam1=t1.IdTeam)
                join Team as t2 on(gt.IdTeam2=t2.IdTeam)) 
                join Serie_Game as sg on (sg.IdGame=gt.IdGame)
                join Serie as s on (sg.IdSerie=s.IdSerie)
                where s.NameSerie = 'Grupo ${serieName}'`

            connection.query(sqlQuery, (error, rows, fields) => {
                if (error) return reject(error)
                return resolve(rows)
            })
        })
        return promise
    } catch (error) {
        return error
    }
}

matches.getFinalRoundData = () => {
    
}


module.exports = matches


