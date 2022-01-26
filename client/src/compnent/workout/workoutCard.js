import React from "react";
const WorkoutCard = ({ _id, name, video, reps, sets, rest }) => {
  console.log("WorkoutCard");

  return (
    <div>
      <div className="card mb-3">
        <h4 className="card-header bg-primary text-light p-2 m-0">
          {name} <br />
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <span style={{ fontSize: "1rem" }}>Reps: <input
            type="number"
            placeholder={reps} 
          /></span>
          <span style={{ fontSize: "1rem" }}>Sets: <input
            type="number"
            placeholder={sets} 
          /></span>
          <span style={{ fontSize: "1rem" }}>Rest: <input
            type="number"
            placeholder={rest} 
          /> Minutes</span>
        </h1>
      </div>
    </div>
  );
};
export default WorkoutCard;
