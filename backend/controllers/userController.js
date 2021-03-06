const jwt = require('jwt-simple');
const User = require('./../models/userModel');
const { validateSignupData } = require('./../utils/validators');

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET )
}

exports.signup = async (req, res, next) => {
  // console.log('req.body', req.body);
  const { name, email, password } = req.body;
  const { errors, valid } = validateSignupData(req.body);
  // console.log(errors, valid);

  if(!valid){
    return res.status(422).json(errors);
  }
  try {
    // See if a user with the given email exists
    const existingUser = await User.findOne({ email: email });

    // If a user with provided email already exists, return an error
    if(existingUser){
      return res.status(422).send({ message: 'Email already in use' })
    }

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

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch(error){
    next(error);
  }
}

exports.signin = async (req, res, next) => {
  try {
    // User has already has their email and password auth'd from passport
    // We just need to give them a token

    // req.user has value of user that was addded to it by done() callback of passsport
    res.send({ token: tokenForUser(req.user)});
  } catch (error){
    next(error);
  }
}

exports.getUser = async (req, res, next) => {
  console.log('req.user', req.user);
  try {
    const user = await User.findOne({ email: req.user.email });
    console.log('user', user);
    res.json(user);
  } catch(error){
    next(error);
  }
}