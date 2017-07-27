const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');


const serverCtrl = require('./serverCtrl');

const app = express();

app.use(express.static(__dirname + '/build'))

// app.get('/api/test', function(req, res, next){
//     res.send('testing !!')
// })


massive(config.connectionString).then(function(db) {
    app.set('db', db)
    db.createTravelers().then(result => {
        console.log(result)
    })
})



app.post('/api/travelers', serverCtrl.createTravelers)





app.listen(4000, function(){
    console.log("listening on port 4000")
})
