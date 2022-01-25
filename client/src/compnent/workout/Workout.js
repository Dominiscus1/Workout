import React from "react";
import "./Workout.css";
import workoutCard from "./workoutCard";
import { QUERY_EXERCISES } from "../../utils/queries";
import { useQuery } from "@apollo/client";

function Workout() {
  const { loading, data } = useQuery(QUERY_EXERCISES);
  const exercises = data?.exercises || [];

  // function filterMuscle() {
  //   if (!currentCategory) {
  //     return state.products;
  //   }
    return (
      <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-8 mb-3">
            <div className="d__flex-row">
              {/* {filterMuscle().map((product) => ( */}
                <workoutCard
                  key={exercises._id}
                  _id={exercises._id}
                  name={exercises.name}
                  video={exercises.video}
                  reps={exercises.reps}
                  sets={exercises.sets}
                  rest={exercises.rest}
                />
              
            </div>
          </div>
        </div>
      </main>
    );
  }


export default Workout;
