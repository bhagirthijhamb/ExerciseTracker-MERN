const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 4 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timeStamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;