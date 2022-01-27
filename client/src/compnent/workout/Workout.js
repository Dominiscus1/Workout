import React, { useState, useEffect } from "react";
import "./Workout.css";
import WorkoutCard from "./workoutCard";
import homepageImg from "../../image/homepageImg.jpg";
import { QUERY_EXERCISES, QUERY_MUSCLEGROUPS } from "../../utils/queries";
import { useQuery, useLazyQuery } from "@apollo/client";

function submitWorkout(exercise) {
  // const state = useSelector((state) => state);
  const exerciseIds = [];
  exercise.forEach((exercise) => {
    for (let i = 0; i < exercise.length; i++) {
      exerciseIds.push(exercise._id);
    }
  });
}

function Workout(props) {
  // console.log("Workout");

  const { loading, data: muscleGroupData } = useQuery(QUERY_MUSCLEGROUPS);

  const [getExercises, { data }] = useLazyQuery(QUERY_EXERCISES);

  const [muscleGroup, setMuscleGroup] = useState();

  const muscleGroups = muscleGroupData?.muscleGroups;

  useEffect(() => {
    // console.log(`useEfect - muscleGroup: ${muscleGroup}`);
    //  get muscleGroup Id
    if (muscleGroup) {
      const group = muscleGroups.filter((group) => group.name === muscleGroup);
      // console.log(`useEffect - group: ${JSON.stringify(group)} `);
      // console.log(`useEffect - group[0]: ${JSON.stringify(group[0])} `);
      // console.log(`useEffect - group[0]._id: ${JSON.stringify(group[0]._id)} `);
      // const groupId = group[0]._id;

      getExercises({
        variables: { muscleGroup: group[0]._id },
      });
    }
  }, [muscleGroup, muscleGroups, getExercises]);

  if (loading) {
    return <div>loading ...</div>;
  }

  return (
    <main className="px__30">
      {/* {console.log(muscleGroups)} */}
      <div className="About component__space" id="About">
        <div className="container">
          <div className="row">
            <div className="col__2">
              <img src={homepageImg} alt="" className="homeImg"></img>
            </div>
            <div className="col__2">
              <h1 className="title__heading">How does one workout?</h1>
              <div className="heading__meta">
                <p className="heading__text p__color text__align__center">
                  Do you sit on a computer all day coding your life away wondering how will you
                  ever get fit? We got the solution for you! With "E-Ripped" you can start getting
                  off that chair and get <strong style={{fontSize:'28px'}}>RIPPED</strong>.
                </p>
                <select
                  onChange={(e) => setMuscleGroup(e.target.value)}
                  value={muscleGroup}
                >
                  <option value="">Choose Muscle Group...</option>

                  {muscleGroups.map((group) => (
                    <option key={group._id} value={group.name}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

  

      <div className="d__flex row justify__content__center">
        <div className="col-12 col-md-8 mb-3">
          <div className="d__flex row">
            {!data ? (
              <div className="loading"></div>
            ) : (
              data.exercises.map((exercise) => {
                // console.log(exercise);
                return (
                  <WorkoutCard
                    setExercises={props.setExercises}
                    exercises={props.exercises}
                    key={exercise._id}
                    _id={exercise._id}
                    name={exercise.name}
                    video={exercise.video}
                    reps={exercise.reps}
                    sets={exercise.sets}
                    rest={exercise.rest}
                  />
                );
              })
            )}
            {/* <button onClick={submitWorkout(exercise)}>Save</button> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Workout;
