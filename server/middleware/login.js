const passport = require('passport');

// Middleware for authentication
const authenticate = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
});

// Route handler
function login(req, res, next) {
  // Call the authenticate middleware
  authenticate(req, res, next);
}

module.exports = login;