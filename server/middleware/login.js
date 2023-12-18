const passport = require('passport');

function login(req, res) {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
  })(req, res);
}

module.exports = login;