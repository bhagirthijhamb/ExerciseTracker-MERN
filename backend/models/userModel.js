const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 4 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timeStamps: true })

userSchema.pre('save', async function(next) {
  try {
    const user = this;
    if(!user.isModified('password')){
      next();
    }

    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(user.password, salt);

    bcrypt.genSalt(10, async function(err, salt) {
      if(err){
        return next(err);
      }

      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if(err){
          return next(err);
        }

        user.password = hash;
        next()
      })
    })

    // user.password = hash;
    // next();
  } catch(error){
    next(error)
  }
})

userSchema.methods.comparePasswords = function(password, callback){
  bcrypt.compare(password, this.password, function(err, isMatch){
    if(err){
      return callback(err);
    }
    callback(null, isMatch);
  })
}

const User = mongoose.model('User', userSchema);

module.exports = User;