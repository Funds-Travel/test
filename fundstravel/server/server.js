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

// endpoints
app.get('/api/packages', serverCtrl.getPackage)
app.get('/api/user/:email', serverCtrl.getUser)
app.post('/api/traveler', serverCtrl.createTraveler)


app.listen(3001, function() {
    console.log("listening from Server")
});
