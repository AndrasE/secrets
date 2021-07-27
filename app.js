//on the top of everything.
require(`dotenv`).config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require(`mongoose-findorcreate`);
const FacebookStrategy = require("passport-facebook").Strategy;


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

//use session packadge with some setup config//
app.use(session({
  secret: 'My little secret.',
  resave: false,
  saveUninitialized: false,
}))

//initalize passport packadge and for also to deal with the session//
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb+srv://andras:" +process.env.MONGOOSE_PASS+ "@cluster0.zfr0d.mongodb.net/secretDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//schema in order to have a plugin it has to be a mongoose schema//
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  googleId: String,
  facebookId: String,
  secret: Array
});

//adding plugins to schema//
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

//configuring passport, serialize=create and deserialize=able to crack open cookie//
passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://app-secret.herokuapp.com/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({
      username: profile.id,
      googleId: profile.id
    }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "https://app-secret.herokuapp.com/auth/facebook/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({
      username: profile.id,
      facebookId: profile.id
    }, function (err, user) {
      return cb(err, user);
    });
  }
));


app.get("/", function(req, res) {
  res.render("home")
});

app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] })
);

app.get("/auth/google/secrets",
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  });

app.get('/auth/facebook',
    passport.authenticate('facebook'));

app.get('/auth/facebook/secrets',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/secrets');
    });

app.get("/login", function(req, res){
  res.render("login")
});


app.get("/register", function(req, res){
  res.render("register")
});

app.get("/secrets", function(req, res) {
  User.find({secret: {$nin: [null, []] } }, function(err, secrets) {
    if (err) {
      console.log(err);
    } else {
      if (req.isAuthenticated()) {
        User.findById(req.user.id, function(err, foundUser) {
          if (err) {
            console.log(err);
          } else {
            res.render("secrets", {
              secrets: secrets,
              text: "To access/submit your secrets go to My Secrets"
            });
          }
        });
      } else {
        res.render("secrets", {
          secrets: secrets,
          text: "Please login/register to submit your own secrets!"
        });
    }};
  });



  app.route("/mysecrets")
    .get(function(req, res) {
      if (req.isAuthenticated()) {
        User.findById(req.user.id, function(err, foundUser) {
          if (!err) {
            res.render("mysecrets", {
              userSecrets: foundUser.secret
            });
          }
        })
      } else {
        res.render("mysecrets", {
          userSecrets: []
        });
      }
    })
    .post(function(req, res) {
      if (req.isAuthenticated()) {
        User.findById(req.user.id, function(err, user) {
          user.secret.push(req.body.secret);
          user.save(function() {
            res.redirect("/secrets");
          });
        });

      } else {
        res.redirect("/login");
      }
    });

    app.post("/mysecrets/delete", function(req, res) {
      if (req.isAuthenticated()) {
        User.findById(req.user.id, function(err, foundUser) {
          foundUser.secret.splice(foundUser.secret.indexOf(req.body.secret), 1);
          foundUser.save(function(err) {
            if (!err) {
              res.redirect("/secrets");
            }
          });
        });
      } else {
        res.redirect("/login");
      }
    });


app.get("/logout", function(req, res){
  if (req.isAuthenticated()) {
    res.render("logout");
  } else {
    res.render("logout2");
   };
 });

app.get("/logout3", function(req, res){
  req.logout();
  res.redirect("/");
});

app.get("/delete", function(req, res){
  if (req.isAuthenticated()) {
    res.render("delete");
  } else {
    res.render("logout2");
   };
 });

 app.get("/delete2", function(req, res){
   User.findByIdAndRemove(req.user.id ,function (err) {
    if (err){
        console.log(err)
    }
    else {
        console.log("User Deleted");
        res.redirect("/bye");
    }
});
});

app.get("/bye", function(req, res){
res.render("bye")
});

app.post("/register", function(req, res) {
  User.register({username: req.body.username}, req.body.password, function(err, user){
    if (err) {
      console.log(err);
      res.redirect("/register")
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/secrets")
      })
    }
  })
});

app.post("/mysecrets", function(req, res){
  const submittedSecret = req.body.secret;
  // console.log(req.user.id);
  User.findById(req.user.id, function(err, foundUser){
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secret = submittedSecret;
        foundUser.save(function(){
          res.redirect("/secrets");
        });
      }
    }
  });
});

app.post("/login", function(req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.passport
  });

  req.login(user, function(err){
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req,res, function(){
        res.redirect("/secrets");
      })
    }
  })
});


let port = process.env.PORT;
if (port == null || port == "") { port = 3000;}
app.listen(port);
