import { gql } from '@apollo/client';

export const QUERY_MUSCLEGROUPS = gql`
    query {
        muscleGroups {
            _id
            name
        }
    }
`
export const QUERY_EXERCISES = gql`
query getExercises($muscleGroup: ID, $name: String) {
    exercises (muscleGroup: $muscleGroup, name: $name) {
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

export const QUERY_ALL_USERS = gql`
{
    userWorkouts {
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

export const QUERY_ONE_USER = gql`
    {
        userWorkout {
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