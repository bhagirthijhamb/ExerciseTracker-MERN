const Exercise = require('./../models/exerciseModel');

exports.getExercises = async(req, res, next) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch(error){
    next(error)
  }
}

exports.addExercise = async(req, res, next) => {
  const { username, description, duration, date } = req.body;
  try {
    const exercise = new Exercise({
      username,
      description,
      duration,
      date
    })

    const newExercise = await exercise.save();
    res.json(newExercise);
  } catch (error){
    next(error);
  }
}

exports.getOneExercise = async(req, res, next) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
  } catch(error){
    next(error);
  }
}

exports.deleteExercise = async (req, res, next) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json({ message: 'Exercise deleted' })
  } catch(error){
    next(error);
  }
}

exports.editExercise = async (req, res, next) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if(exercise){
      exercise.username = req.body.username,
      exercise.description = req.body.description,
      exercise.duration = Number(req.body.duration),
      exercise.date = Date.parse(req.body.date)
    }
    const updatedExercise = await exercise.save();
    res.json(updatedExercise);
  } catch (error){
    next(error);
  }
}