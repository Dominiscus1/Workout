const { AuthenticationError } = require("apollo-server-express");
const { User, MuscleGroup, Workout, Exercise } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    muscleGroups: async () => {
      return await MuscleGroup.find();
    },
    exercises: async (parent, args) => {
      return await Exercise.find(
        {
          muscleGroup: args.muscleGroup
        })
      .populate('muscleGroup');
    },
    userWorkouts: async (parent, args) => {
      return await User.find().populate({
        path: 'workouts',
        populate: 'exercises'
      })
    },
    userWorkout: async (parent, args) => {
      return await User.findOne({
        _id: args.userId
      })
      .populate({
        path: 'workouts',
        populate: 'exercises'
      })
    },

    // user: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: "orders.products",
    //       populate: "category",
    //     });

    //     user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    //     return user;
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
  },
  // Mutation: {
  //   addUser: async (parent, args) => {
  //     const user = await User.create(args);
  //     const token = signToken(user);

  //     return { token, user };
  //   },
  // }
};
module.exports = resolvers;
