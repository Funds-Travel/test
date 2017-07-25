const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectionString = require()
const app = express();

app.use(express.static(__dirname + '/build'))

// app.get('/api/test', function(req, res, next){
//     res.send('testing !!')
// })

app.listen(4000, function(){
    console.log("listening on port 4000")
})