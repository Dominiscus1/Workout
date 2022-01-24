import React from 'react';

const workoutCard = ({ workout, title }) => {
  console.log('workout card')
    return (
      <div>
        <h3>{title}</h3>
        {workout &&
          workout.map((workout) => (
            <div key={workout._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {workout.name} <br />
                <span style={{ fontSize: '1rem' }}>
                  {workout.reps}
                  {workout.sets}
                  {workout.rest}
                  {workout.video}
                </span>
              </h4>
            </div>
          ))}
      </div>
    );
  };

export default workoutCard;
