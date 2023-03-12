const getSeason = async function(){
    let response = await fetch("http://ergast.com/api/f1/drivers/webber/seasons.json");
    let json = await response.json();
    console.log("Mark Webber has competed in the following seasons:");
    json.MRData.SeasonTable.Seasons.forEach(function(element) { console.log(element.season); });
}

const getFirstRace2010 = async function(){
    let response = await fetch('https://ergast.com/api/f1/2010/1/results.json')
    let json = await response.json()
    console.log('The winner of the first race in 2010 -- ')
    let winner = json.MRData.RaceTable.Races[0].Results.find((item) => {
        return item.position === '1'
    })
    console.log(`${winner.Driver.givenName} ${winner.Driver.familyName} is the Winner of first race in 2010`)

}

const getAllDriversInminardi = async function(){
    let response = await fetch("https://ergast.com/api/f1/constructors/minardi/drivers.json?limit=100");
    let json = await response.json();
    console.log("The all drivers in team Minardi: ");
    let drivers = json.MRData.DriverTable.Drivers

    drivers.forEach((item) => {
        console.log(` - ${item.givenName} ${item.familyName} - `)
    })
}


// getSeason()
// getFirstRace2010()
getAllDriversInminardi()