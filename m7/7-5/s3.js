const sqlite3 = require('sqlite3')

let database = new sqlite3.Database("Chinook_Sqlite.sqlite", function(error) {
    if (error) {
        console.log(`Failed to connect to Chinook database: ${error.message}`);
    } else {
        console.log("Connected to Chinook database.");
    }
});
//
// database.all('SELECT * FROM Album, MediaType, Genre', function(error, rows){
//     if (error) {
//         console.log(`Failed to connect to Chinook database: ${error.message}`);
//     } else {
//         rows.forEach((item)=>{
//             console.log(item.AlbumId)
//         })
//     }
// })

database.all('SELECT * FROM Album, Track WHERE Album.AlbumId = Track.AlbumId', function(error, rows){
    if(error){

    }else{
        rows.forEach((item)=> {
            console.log(` Album id : ${item.AlbumId}, Track id: ${item.TrackId}`)
        })
    }
})
