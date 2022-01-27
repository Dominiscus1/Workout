import { React, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_WORKOUT } from "../../utils/mutations";
import Auth from '../../utils/auth'

const WorkoutCard = ({setExercises, exercises, _id, name, video, reps, sets, rest }) => {
  // console.log("WorkoutCard");

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT);

  const handleSaveWorkout = async (event) => {
    event.preventDefault();

    try {
      const { data } = addWorkout({
        variables: {
          exercises,
        },
      });

    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { _id, value } = event.target;
  };

  function saveExercise() {
    console.log("Exercises Saved");
    let exercise = {
      _id
    };

    let workoutArray = [...exercises, exercise];
    console.log(workoutArray);

    setExercises(workoutArray);
  }

  function saveWorkout() {
    //when user click btn get information of workout and send with mutation
  }

  return (
    <div>
      <div className="max-w-sm rounded shadow-lg" style={{backgroundColor: '#446161'}}>
        <h1 className="px-6 py-4 font-bold text-xl mb-2">
          <div className="video-responsive w-full" style={{borderRadius: "5px"}}>
            <iframe
              width="350"
              height="250"
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          {name} <br />
          <p class="text-gray-700 text-base">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Reps: {reps}
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Sets: {sets}
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Rests: {rest} Seconds
            </span>
          </p>
          <div>
          {Auth.loggedIn() ? (
            <button className="saveButton btn1" onClick={saveExercise}>
              Save Exercise
            </button> ) : (
              <span>Log in to save workout</span>
            )}
          </div>
        </h1>
      </div>
    </div>
  );
};
export default WorkoutCard;
