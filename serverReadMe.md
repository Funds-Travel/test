Heroku requirements/instructions:

Files to create:
Procfile:   This file needs to point to your server.js(or index.js) whichever your node server is pointing at.
.env:       This file is exactly like a config file but with a different template:
            DATABASE_URL=PUT-YOUR-DATABSE-URL-HERE(NO SPACES)
            SECRET=DO-YOU-HAVE-A-SECRET
            PORT=3000

The .env file replaces all of your secret keys. To point to it, you need to refer to it as process.env.example (see line 5).
Once you transferred all your config files to .env, you can start replacing your server.js endpoints.

You also no longer need a config file. Instead, a "require('dotenv').config();" at line 1 will import the .env file.

Example replacement #1:     (What you might have)

massive(connectionstring)
.then(function(dbInstance) {
  db = dbInstance;
    app.set('db', dbInstance)
});

                            (What you need to have * NOTE: Line 6 is where you pointed to the database.)

massive(process.env.DATABSE_URL)  
.then(function(dbInstance) {
  db = dbInstance;
    app.set('db', dbInstance)
});

Example replacement #2:     (What you might have)

app.use( session(config.session) );

                            (What you need to have * Note: Line 7.)

app.use(expressSession({secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false}))



Obsolete File:  app.use( '/', express.static(__dirname + "/public") );
Required File:  app.use(express.static(__dirname + '/build'))

The /public became obsolete because we are using yarn build to server the back and front end. Before, we were just serving the front end!

The last thing you need to do is change the port assignment to 'process.env.PORT'. Again, this is now pointong to the .env file's PORT=3000 (line 8).


Now that we are ready for Heroku. We need to open a Heroku account.

Command Line specific: 

#1 Download the CLI
        https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

#2  Heroku Login
        It will ask for email.
        It will ask for password.

#3  Heroku Create
        Heroku create
            - This will create a random generated app.
        Adding a Database?
            - heroku addons:create heroku-postgresql:hobby-basic
            Hobby basic is the free version database plan.

