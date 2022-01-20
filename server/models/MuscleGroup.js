const mongoose = require('mongoose');

const { Schema } = mongoose;

const muscleGroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const muscleGroup = mongoose.model('MuscleGroup', muscleGroupSchema);

module.exports = muscleGroup;
