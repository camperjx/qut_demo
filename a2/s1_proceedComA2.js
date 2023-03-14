const fs = require('fs')
const path = require('path')
const contentAirports = fs.readFileSync(path.join(__dirname, './source/A2_Airports.json'), 'utf-8')
const contentFligts = fs.readFileSync(path.join(__dirname, './source/A2_Flights.json'), 'utf-8')
// console.log(contentFligts)
const jsonAirports = JSON.parse(contentAirports)
const jsonFlights = JSON.parse(contentFligts)
// console.log(jsonFlights)
const obj = {
    source_airport: {
        id: 3341,
        name: "Adelaide International Airport",
        city: "Adelaide",
        country: "Australia",
        iata: "ADL",
        latitude: -34.945,
        longitude: 138.531006,
        altitude: 20,
        timezone: 9.5
    },
    destination_airport: {
        id: 6312,
        name: "Port Augusta Airport",
        city: "Argyle",
        country: "Australia",
        iata: "PUG",
        latitude: -32.5069007873535,
        longitude: 137.716995239258,
        altitude: 56,
        timezone: 9.5
    },
    codeshare: false,
    aircraft: ["Fairchild Swearingen Metroliner"],
    airline: {
        code: "SH",
        name: "Sharp Airlines",
        country: "Australia"
    }
}

// function FlightAirportDetails(source_airport, destination_airport, codeshare, aircraft, airline){
//     this.
// }
class SourceAirPort {
    constructor(id, name, city, country, iata, latitude, longitude, altitude, timezone) {
        this.id = id
        this.name = name
        this.city = city
        this.country = country
        this.iata = iata
        this.latitude = latitude
        this.longitude = longitude
        this.altitude = altitude
        this.timezone = timezone
    }
}

class DestinationAirport {
    constructor(id, name, city, country, iata, latitude, longitude, altitude, timezone) {

    }
}

class Airline {
    constructor() {

    }

}

class FlightAirportDetails {
    constructor(source_airport, destination_airport, codeshare, aircraft, airline) {
        this.source_airport = source_airport
        this.destination_airport = destination_airport
        this.codeshare = codeshare
        this.aircraft = aircraft
        this.airline = airline
    }
}