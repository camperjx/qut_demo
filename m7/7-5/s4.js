const sqlite3 = require('sqlite3')

const addEmployee = function () {
    let database = new sqlite3.Database('Guava_Database.db', function (error) {
        if (error) {
            console.log(`Failed to connect to Chinook database: ${error.message}`);
        } else {
            console.log("Connected to Chinook database.");
        }
    })

    database.run('INSERT INTO employees(id, firstName, lastName, gender, age, position) VALUES("1", "John", "Wick", "Male", 22, "Manager")', function (error) {
        if (error) {
            console.log(`Failed to add row to Album table: ${error.message}`);
        } else {
            console.log("Successfully added row to Album table.");
        }

    })
    database.close()
}

// addEmployee()

const addSale = function () {
    let database = new sqlite3.Database('Guava_Database.db', function (error) {
        if (error) {
            console.log(`Failed to connect to Chinook database: ${error.message}`);
        } else {
            console.log("Connected to Chinook database.");
        }
    })

    database.run(`INSERT INTO sales(id, staffid, item, price, date) VALUES(3, 1, "WIFI ROUTER", 299, ${new Date().toDateString()})`, function (error) {
        if (error) {
            console.log(`Failed to connect to Chinook database: ${error.message}`);
        } else {
            console.log("Connected to Guava_Database database.");
        }
    })
    database.close()
}

addSale()