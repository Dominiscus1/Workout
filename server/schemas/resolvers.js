const { AuthenticationError } = require("apollo-server-express");
const { User, MuscleGroup, Workout } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    muscleGroup: async () => {
      return await MuscleGroup.find();
    },
    workouts: async (parent, { muscleGroup, name }) => {
      const params = {};
      if (muscleGroup) {
        params.muscleGroup = muscleGroup;
      }
      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Workout.find(params).populate("muscleGroup");
    },
    workout: async (parent, { _id }) => {
        return await Workout.findById(_id).populate('muscleGroup');
  },
    
}};
module.exports = resolvers;
