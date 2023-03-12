const sqlite3 = require('sqlite3')


let database = new sqlite3.Database("Chinook_Sqlite.sqlite", function(error) {
    if (error) {
        console.log(`Failed to connect to Chinook database: ${error.message}`);
    } else {
        console.log("Connected to Chinook database.");
    }
});


// query all
// database.all("SELECT * FROM Album", function (error, rows) {
//     if (error) {
//         console.log(`Failed to retrieve rows from Album table: ${error.message}`);
//     } else {
//         console.log(`Retrieved ${rows.length} rows from Album table.`);
//         rows.forEach(function (row) {
//             console.log(`${row.AlbumId} - ${row.Title}`);
//         });
//     }
// });

database.all("SELECT * FROM Album WHERE Title LIKE '%One%'", function (error, rows) {
    if (error) {
        console.log(`Failed to retrieve rows from Album table: ${error.message}`);
    } else {
        console.log(`Retrieved ${rows.length} rows from Album table.`);
        rows.forEach(function (row) {
            console.log(`${row.AlbumId} - ${row.Title}`);
        });
    }
});


database.all('SELECT * FROM Album WHERE AlbumId = 100', (err, rows)=>{
    if(err){
        console.log('Fail')
    }else{
        rows.forEach((item)=>{
            console.log(`${item.AlbumId} == ${item.Title}`)
        })
    }
})

// database.run("INSERT INTO Artist VALUES (399, 'John Farnham')", function (error) {
//     if (error) {
//         console.log(`Failed to add John Farnham to Artist table: ${error.message}`);
//     } else {
//         console.log("Successfully added John Farnham to Artist table.");
//     }
// });

// database.run("INSERT INTO Album VALUES (350, 'Love Goes', 277)", function (error) {
//     if (error) {
//         console.log(`Failed to add row to Album table: ${error.message}`);
//     } else {
//         console.log("Successfully added row to Album table.");    }
//
// });

// database.run('UPDATE Album SET Title = "Hello world" WHERE AlbumId=1',(error)=>{
//     if (error) {
//         console.log(`Failed to add row to Album table: ${error.message}`);
//     } else {
//         console.log("Successfully added row to Album table.");    }
//
// })


database.run('DELETE FROM Album WHERE AlbumId=276', function(error){
    if (error) {
        console.log(`Failed to add row to Album table: ${error.message}`);
    } else {
        console.log("Successfully added row to Album table.");    }
})

database.close();