const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive')



const server = app.listen(process.env.PORT || 3001, function() {
    const port = server.address().port);
    console.log("Server is listening on port", port);
})

const dbConfig = {
    user: "bxgewkyr",
    password: "6dGlWeNrRIaXjciK5SnFrw43C8tf3Mkz",
    server: "stampy.db.elephantsql.com",
    database: "DM6-Funds_Travel"
}

const executQuery = function(res, query) {
    sql.connect(dbConfig, function (err) {
        if (err) {
            console.log("Error while connection database:- " + err);
            res.send(err);
        }
        else {
            res.send(err);
        }
    });
}



const app = express();

app.use(express.static(__dirname + '/build'))

massive(connectionString)
.then(dbInstance => {
    app.set('db', dbInstance)
})

// app.get('/api/test', function(req, res, next){
//     res.send('testing !!')
// })

app.listen(4000, function(){
    console.log("listening on port 4000")
})