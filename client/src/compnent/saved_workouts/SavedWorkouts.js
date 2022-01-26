import React from 'react';

const SavedWorkouts = ({ _id, name, video, reps, sets, rest }) => {
    console.log("savedWorkouts")



  return <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <iframe
              width="250"
              height="150"
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{name}</div>
    <p class="text-gray-700 text-base">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Reps: <input type="number" placeholder={reps} style={{width: "50px"}}></input></span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Sets: <input type="number" placeholder={sets} style={{width: "50px"}}></input></span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rests: <input type="number" placeholder={rest} style={{width: "50px"}}></input></span>
    </p>
  </div>
</div>
  </div>;
}

export default SavedWorkouts;
