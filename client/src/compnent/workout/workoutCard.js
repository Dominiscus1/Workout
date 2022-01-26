import {React, useState} from "react";
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from "../../utils/mutations";

const WorkoutCard = ({ _id, name, video, reps, sets, rest }) => {
  console.log("WorkoutCard");
  
  const [formState, setFormstate] = useState({
    _id,
    name
  });

  const [exercises, setExercises] = useState([  ])

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT)

  const handleSaveWorkout = async (event) => {
    event.preventDefault();

    try {
      const { data } = addWorkout({
        variables:{... formState}
      });

      window.location.reload();
    } catch(err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { _id, value } = event.target;
  }

  function saveExercise() { 
    setExercises(exercises.push({ _id, name}))
    console.log(exercises)
    let exercise = {
      _id,
      name
    }
    let workoutArray = [...exercise, exercise.name];
    workoutArray.push(exercise);
    console.log(workoutArray);

    setExercises(workoutArray)
  }

  function saveWorkout() {
    //when user click btn get information of workout and send with mutation

  }

  return (
    <div>
      <div className="card mb-3">
        <h1 className="card-header bg-primary text-light p-2 m-0">
          {name} <br />
          <div className="video-responsive">
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
          <span style={{ fontSize: "1rem"},{width: '40px'}}>Reps: {reps}</span>
          <span style={{ fontSize: "1rem" },{width: '40px'}}>Sets: {sets}</span>
          <span style={{ fontSize: "1rem" },{width: '40px'}}>Rest: {rest} Minutes</span>
          <button className="saveButton btn1" onSubmit={handleSaveWorkout} onClick={saveExercise}>Save Exercise</button>
          <button className="saveButton btn1" onSubmit={handleSaveWorkout} onClick={saveWorkout}>Save Workout</button>
        </h1>
      </div>
    </div>
  );
};
export default WorkoutCard;
