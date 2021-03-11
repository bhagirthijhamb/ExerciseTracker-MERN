const mongoose = require('mongoose');

const requiredString = { type: String, required: true }

const exerciseSchema = mongoose.Schema({
  username: { ...requiredString },
  description: { ...requiredString },
  duration: { type: Number, required: true},
  date: { type: Date, required: true }
}, { timeStamps: true })

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;