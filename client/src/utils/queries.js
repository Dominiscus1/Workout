import { gql } from '@apollo/client';

export const QUERY_MUSCLEGROUPS = gql`
    {
        muscleGroups {
            _id
            name
        }
    }
    `

export const QUERY_ONE_USER = gql`
    {
        user {
            firstName
            lastName
            email
            workout {
                _id
                name
                exercises {
                    _id
                    name
                    video
                    reps
                    sets
                    rest
                    video
                    muscleGroup {
                        name
                    }
                }
            }
        }
    }
`

export const QUERY_ALL_USERS = gql`



`

export const QUERY_ALL_EXERCISES = gql`
    {
        exercises {
            _id
            name
            reps
            sets
            rest
            video
            muscleGroup {
                name
            }
        }
    }
`