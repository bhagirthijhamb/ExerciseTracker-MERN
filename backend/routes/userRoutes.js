const userController = require('./../controllers/userController');
const passportService = require('../utils/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  // app.get('/', (req, res, next) => {
  //   res.send('Hare Krishna')
  // })

  app.get('/users', requireAuth, userController.getUsers);
  app.post('/users/signin', requireSignin, userController.signin);
  app.post('/users/signup', userController.signup);
}