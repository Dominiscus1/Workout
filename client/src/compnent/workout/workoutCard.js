import React from "react";


const WorkoutCard = ({ _id, name, video, reps, sets, rest }) => {
  console.log("WorkoutCard");

  return (
    <div>
      <div className="card mx__15">
        <h1 className="card-header px__30 ">
          {name} <br />
          <div className="video-responsive">
            <iframe
              width="350"
              height="250"
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
