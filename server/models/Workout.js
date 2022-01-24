const mongoose = require('mongoose');
const {exerciseSchema} = require('./Exercise');

const { Schema } = mongoose;

const workoutSchema = new Schema({
    name: {
      type: String,
    },
    exercises: [exerciseSchema]
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true
    // }

  });
  
  const Workout = mongoose.model('Workout', workoutSchema);
  

module.exports = Workout;

