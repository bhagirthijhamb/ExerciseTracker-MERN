const jwt = require('jwt-simple');
const User = require('./../models/userModel');
const { validateSignupData } = require('./../utils/validators');

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET )
}

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const { errors, valid } = validateSignupData(req.body);

  if(!valid){
    return res.status(422).json(errors);
  }
  try {
    const user = new User({
      name,
      email,
      password
    })

    const newUser = await user.save();
    // res.json(newUser);
    res.json({ token: tokenForUser(newUser) })
  } catch(error){
    console.log(error);
    next(error);
  }
}