const exerciseController = require('./../controllers/exerciseController');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
  app.get('/exercises', exerciseController.getExercises);
}