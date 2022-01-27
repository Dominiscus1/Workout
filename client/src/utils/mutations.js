import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email:String!, $password:String!){
        login(email:$email, password:$password){
            token
            user {
                _id
            }
        }
    }
`

export const ADD_USER = gql `
    mutation addUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            firstName:$firstName
            lastName:$lastName
            email:$email
            password:$password
        ) {
            token
            user {
                _id
            }
        }
    }
`

export const ADD_WORKOUT = gql`
    mutation addWorkout($exercises:[ID]!){
        addWorkout(exercises:$exercises){
            _id
            name
            video
            reps
            sets
            rest
        }
    }
`