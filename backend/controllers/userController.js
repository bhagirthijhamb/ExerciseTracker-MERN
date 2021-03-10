const User = require('./../models/userModel');
const { validateSignupData } = require('./../utils/validators');

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
    res.json(newUser);
  } catch(error){
    console.log(error);
    next(error);
  }
}