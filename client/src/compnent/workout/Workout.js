import React, { useState, useEffect } from "react";
import "./Workout.css";
import WorkoutCard from "./workoutCard";
import { QUERY_EXERCISES, QUERY_MUSCLEGROUPS } from "../../utils/queries";
import { useQuery, useLazyQuery } from "@apollo/client";

function Workout() {
  console.log("Workout");

  const {loading , data: muscleGroupData} = useQuery(QUERY_MUSCLEGROUPS);

  const [getExercises, { data }] = useLazyQuery(QUERY_EXERCISES);

  const [muscleGroup, setMuscleGroup] = useState();

  const muscleGroups = muscleGroupData?.muscleGroups;

  useEffect(() => {
    if (muscleGroup) {
      getExercises({
        variables: { muscleGroup: muscleGroup },
      });
    }
  }, [muscleGroup]);

  if (loading) {
    return <div>loading ...</div>
  }

  return (
    <main>
      <select
        onChange={(e) => setMuscleGroup(e.target.value)}
        value={muscleGroup}
      >
        <option>Choose muscle group...</option>
        {muscleGroups.map((muscleGroup) => (
          <option value={muscleGroup}>
            {muscleGroup}
          </option>
        ))}
      </select>

      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          <div className="d__flex-row">
            {!data ? (
              <div>loading ...</div>
            ) : (
              data.exercises.map((exercise) => {
                <WorkoutCard
                  key={exercise._id}
                  _id={exercise._id}
                  name={exercise.name}
                  video={exercise.video}
                  reps={exercise.reps}
                  sets={exercise.sets}
                  rest={exercise.rest}
                />;
              })
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Workout;
