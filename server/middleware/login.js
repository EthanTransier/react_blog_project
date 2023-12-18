const passport = require('passport');

function login(req, res) {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/'
  })(req, res);
}

module.exports = login;