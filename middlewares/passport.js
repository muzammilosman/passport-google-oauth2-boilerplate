const passport = require('passport');
const Strategy = require('passport-google-oauth20').Strategy;


module.exports = function() {
  
  passport.use(new Strategy({
      clientID: process.env['CLIENT_ID'],
      clientSecret: process.env['CLIENT_SECRET'],
      callbackURL: '/auth/redirect',
      scope: [ 'profile' ],
      state: true
    },
    function(accessToken, refreshToken, profile, cb) {
      return cb(null, {profile, accessToken, refreshToken});
    }));

  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  
};