const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const connection = require('./database');
const User = require('../models/user');


const verifyCallback = (username, password, done) => {

    User.findOne({ username: username.toLowerCase() })
        .then((user) => {

            if (!user) { return done(null, false) }
            
            //console.log(user.status);
            if (password == user.password) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch((err) => {   
            done(err);
        });

}

const strategy  = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
    // console.log(user);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});