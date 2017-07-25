// require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD
=======
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



>>>>>>> fc0a1b6f85e887590ae7daa94c07c2479042d959
const app = express();
const massive = require('massive');
const connectionString = require('../config')
const config = require('../config')

app.use(express.static(__dirname + '/build'));


massive(connectionString)
.then(function(dbInstance) {
    app.set('db', dbInstance)
});

massive(connectionString)
.then(dbInstance => {
    app.set('db', dbInstance)
})

// app.get('/api/test', function(req, res, next){
//     res.send('testing !!')
// })

app.listen(4000, () => {
    console.log("listening from Server")
});