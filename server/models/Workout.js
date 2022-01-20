const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  video: {
    type: String
  },
  reps: {
    type: Number,
    required: true,
    min: 1
  },
  sets: {
    type: Number,
    required: true,
    min: 1,
  },
  rest: {
    type: Number,
  },
  muscleGroup: {
    type: Schema.Types.ObjectId,
    ref: 'muscleGroup',
    required: true
  }
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
