const userController = require('./../controllers/userController');

module.exports = (app) => {
  // app.get('/users', (req, res, next) => {
  //   res.send('Hare Krishna')
  // })

  app.post('/users/signup', userController.signup);
}