const { AuthenticationError } = require("apollo-server-express");
const { User, MuscleGroup, Workout, Exercise } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    muscleGroup: async () => {
      return await MuscleGroup.find();
    },
    exercises: async (parent, { muscleGroup, name }) => {
      const params = {};
      if (muscleGroup) {
        params.muscleGroup = muscleGroup;
      }
      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Exercise.find(params).populate("muscleGroup");
    },
    exercises: async (parent, { _id }) => {
        return await Exercise.findById(_id).populate('muscleGroup');
  },
  user: async (parent, args, context) => {
    if (context.user) {
      const user = await User.findById(context.user._id).populate({
        path: 'orders.products',
        populate: 'category'
      });

      user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

      return user;
    }

    throw new AuthenticationError('Not logged in');
  },
    
}};
module.exports = resolvers;
