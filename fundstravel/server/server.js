// require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive')
const config = require('../config')
const connectionString = require('../config')
const app = express();

massive(connectionString)
.then(function(dbInstance) {
    app.set('db', dbInstance)
});

// app.get('/api/test', function(req, res, next){
//     res.send('testing !!')
// })

app.listen(3001, function() {
    console.log("listening from Server")
});