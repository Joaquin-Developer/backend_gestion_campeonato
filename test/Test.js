const Matches = require("../src/modules/Matches");

async function getData() {
    const data = await Matches.getAllSeries()
    // console.log(data)
    for (elem of data)
        console.log(elem.IdSerie, elem.NameSerie)   
}

// getData()


async function getAllMatchesOfAllSeries() {
    const data = await Matches.getAllMatchesOfAllSeries()
    // console.log(data)
}

getAllMatchesOfAllSeries()