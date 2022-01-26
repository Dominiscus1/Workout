import React, { useState, useEffect } from "react";
import "./Workout.css";
import WorkoutCard from "./workoutCard";
import { QUERY_EXERCISES, QUERY_MUSCLEGROUPS } from "../../utils/queries";
import { useQuery, useLazyQuery } from "@apollo/client";
function Workout() {
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

      <div className="d__flex row justify__content__center">
        <div className="col-12 col-md-8 mb-3">
          <div className="d__flex row">
            {!data ? (
              <div className="loadingText">Loading Exercises ...</div>
            ) : (
              data.exercises.map((exercise) => {
                // console.log(exercise);
                return (
                  <WorkoutCard
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default Workout;
