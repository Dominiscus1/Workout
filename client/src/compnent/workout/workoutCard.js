import React from "react";

const workoutCard = ({ exercises, title }) => {
  if (!exercises.length) {
    return <h3>Select A Workout</h3>;
  }

  return (
    <div>
      {exercises &&
        exercises.map((workout) => (
          <div key={workout._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {workout.name} <br />
              <div className="video-responsive">
                <iframe
                  width="853"
                  height="480"
                  src={workout.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
              <span style={{ fontSize: "1rem" }}>{workout.reps}</span>
              <span style={{ fontSize: "1rem" }}>{workout.sets}</span>
              <span style={{ fontSize: "1rem" }}>{workout.rest}</span>
            </h4>
          </div>
        ))}
    </div>
  );
};
export default workoutCard;
