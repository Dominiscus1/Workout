import React from "react";
import "./Workout.css";
import workoutCard from './workoutCard';
import { QUERY_EXERCISES } from "../../utils/queries";
import { useQuery } from '@apollo/client';

function Workout() {
    const { loading, data } = useQuery( QUERY_EXERCISES );
    const exercises = data?.exercises || [];


  return ( 
    <main>
    <div className="flex-row justify-center">
      <div className="col-12 col-md-8 mb-3">
        {/* If the data is still loading, render a loading message */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <workoutCard
          exercises={exercises}
            title="Workouts"
          />
        )}
      </div>
    </div>
  </main>
  );
}

export default Workout;
