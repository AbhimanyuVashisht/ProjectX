let passport = require('passport')
    , User = require('../schema/db')
    , sequelize = require('sequelize');

module.exports = function(app) {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    passport.deserializeUser(function(user, done) {
        // User.findById(id, (err, user)=>{
        //     done(err, user);
        // });
        done(null, user);
    });

    require('./strategies/google.strategy')();
    // require('./strategies/twitter.strategy')();
    // require('./strategies/facebook.strategy')();
};