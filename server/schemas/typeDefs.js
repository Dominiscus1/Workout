const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type: MuscleGroup {
        _id: ID
        name: String
    }

    type: Exercise {
        _id: ID
        name: String
        video: String
        reps: Int
        sets: Int
        rest: Int
        muscleGroup: MuscleGroup
    }

    type: Workout {
        _id: ID
        name: String
        exercises: [Exercise]
    }

    type: User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        bmi: Float
        workouts: [Workout]
    }

    type: Auth {
        token: ID
        user: User
    }

    type Query {
        muscleGroup: [MuscleGroup]
        exercises(muscleGroup: ID, name: String): [Exercise]
        exercise(_id: ID!): Exercise
        user: User
    }

    type: Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`