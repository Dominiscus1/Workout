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

    //     return user;
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addWorkout: async (parent, { exercises }, context) => {
      console.log(context);
      if (context.user) {
        const workout = new Workout({ exercises });

        await User.findByIdAndUpdate(context.user._id, { $push: { workouts: workout } });

        return workout;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};
module.exports = resolvers;
