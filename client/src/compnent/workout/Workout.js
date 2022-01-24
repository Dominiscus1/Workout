import React from "react";
import "./Workout.css";
import workoutCard from './workoutCard';
import { QUERY_ALL_USERS } from "../../utils/queries";

function Workout() {
    const { loading, data } = useQuery( QUERY_ALL_USERS );
    const workout = data?.workout || [];


  return ( 
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* If the data is still loading, render a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <workoutCard
            workout={workout}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>

  );
}

export default Workout;
