require('dotenv').config();

const PORT = process.env.PORT;
const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
// const config = require('.dotenv').config();
const serverCtrl = require('./serverCtrl');
const app = express();

let db;

massive(process.env.DATABASE_URL)
.then(function(dbInstance) {
  db = dbInstance;
    app.set('db', dbInstance)
});

app.use(cors())
app.use(bodyParser.json())
app.use(expressSession({secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false}))

app.get('/api/packages/:funds', serverCtrl.getPackage)
app.get('/api/user/:email', serverCtrl.getUser)
app.post('/api/traveler', serverCtrl.createTraveler)
app.post('/api/addFunds/:user_id', serverCtrl.addFunds)

app.listen(process.env.PORT, function() {
    console.log("listening from Server")
});
