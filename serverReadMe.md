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
        https://devcenter.heroku.com/articles/renaming-apps
        Heroku create
            - This will create a random generated app.
            Renaming it?
            - heroku apps:rename newname
              - newname is whatever you want.
            - git remote rm heroku
            - heroku git:remote -a [app name]

        Adding a Database?
        https://devcenter.heroku.com/articles/heroku-postgresql
            - heroku addons:create heroku-postgresql:hobby-basic
            Hobby basic is the free version database plan.

            - heroku pg:info
            - heroku pg:psql
            - heroku pg:psql gray
            - heroku pg:push mylocaldb HEROKU_POSTGRESQL_MAGENTA --app sushi
              - mylocaldb is the name of the postgres db
              - sushi is the name of the heroku app. In this case, your heroku create instance on line 67.
            - Make sure to check your app settings within Heroku and document your config variables.
              - example:
                Key             VALUE
                DATABASE_URL    whereever your database is pointing, or the key.
                SECRET          whatever your session secret was.
          
          Ready to push?
            - Make sure you have a ProcFile, if not then make one.
              - what a Procfile should contain 
                web: node server.js
            - Make sure you have a .env file, if not then make one.
              - what an env file should contain
                DATABASE_URL=Where_your_database_is
                SECRET=somerandomstring (whatever your session secret is)
                PORT=3001 (whatever port is)
            - Make sure you check your server.js/index./js as per:
              - Line 1. (configure process.env)
              - Line 9. (disable all configs/connectionStrings)
              - Line 15.(massive needs to point to process.env.DATABASE_URL as per .env file)
              - Line 24.(needs to point to the process.env.SECRET as per .env file)
              - Line 33.(needs to listen to the PORT defined in process.env.PORT as per .env file)
          
          Run Yarn Build.
          Remove /Build from .gitignore.
          git push heroku master (to deploy)
          Heroku open to start online instance hosting service.

          Need help?
          Heroku logs
          Heroku restart.

That's how you host on Heroku!