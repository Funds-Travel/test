// require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const massive = require('massive');
const connectionString = require('../config')
const config = require('../config')

app.use(express.static(__dirname + '/build'));


massive(connectionString)
.then(function(dbInstance) {
    app.set('db', dbInstance)
});

// app.get('/api/test', function(req, res, next){
//     res.send('testing !!')
// })

app.listen(4000, () => {
    console.log("listening from Server")
});