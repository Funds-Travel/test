const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('../config');
const serverCtrl = require('./serverCtrl');
const app = express();

let db;

massive(config.connectionString)
.then(function(dbInstance) {
  db = dbInstance;
    app.set('db', dbInstance)
});

app.use(cors())
app.use(bodyParser.json())
app.use(expressSession({secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false}))

app.get('/api/packages/:funds', serverCtrl.getPackage)
app.get('/api/user/:email', serverCtrl.getUser)
app.post('/api/traveler', serverCtrl.createTraveler)
app.post('/api/addFunds/:user_id', serverCtrl.addFunds)

app.listen(3001, function() {
    console.log("listening from Server")
});
