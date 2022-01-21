const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema({
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
  //muscleGroup ID
  muscleGroup: {
    type: Schema.Types.ObjectId,
    ref: 'MuscleGroup',
    required: true
  }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = {Exercise, exerciseSchema};
