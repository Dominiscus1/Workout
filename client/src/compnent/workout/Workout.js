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
              <h1 className="title__heading">Workout</h1>
              <div className="heading__meta">
                <p className="heading__text p__color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
