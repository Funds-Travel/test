// require('dotenv').config()

const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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
app.use(passport.initialize())
app.use(passport.session())

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})
app.post('/welcome', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      console.log(err);
      return next(err); }
    if (info) {
      return res.send(info);
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.send(user);
    });
  })(req, res, next);
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
},
  function(email, password, done) {
    console.log(email)
    db.findOne(email)
    .then(function(users) {
      if (!users.length) {
        return done(null, false, {message: 'User not found!'});
   }  else if (users[0].password !== password) {
     return done(null, false, {message: 'Password not valid!'});
   }  delete users[0].password;
    const user = users[0];
   return done(null, user)
    })
    .catch(err => {
      console.log(err);
      return done(err);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});


// app.get('/api/test', function(req, res, next){
//     res.send('testing !!')
// })


// endpoints
app.get('/api/packages', serverCtrl.getPackage)
app.get('/api/user/:email', serverCtrl.getUser)
app.post('/api/traveler', serverCtrl.createTraveler)


app.listen(3001, function() {
    console.log("listening from Server")
});
