// require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive')
const config = require('../config')
const serverCtrl = require('./serverCtrl')
const app = express();

massive(config.connectionString)
.then(function(db) {
    app.set('db', db)
});

app.use(cors())
app.use(bodyParser.json())
// app.get('/api/test', function(req, res, next){
//     res.send('testing !!')
// })

app.post('/api/traveler', serverCtrl.createTraveler)

app.listen(3001, function() {
    console.log("listening from Server")
});
