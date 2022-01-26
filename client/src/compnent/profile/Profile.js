import React from "react";
import './Profile.css'
import BMI_calculator from "../bmi_calculator/bmi.js";
import SavedWorkouts from "../saved_workouts/SavedWorkouts";

function Profile() {
  return (
    <div>
      <div className="bg-container">
        <div className="container">
          <div className="text-center py-5">
            <div className="row">
              <div className="col__2">
                
                  <h1 className="userBox">Your Workouts</h1>
                  <div className="saved__workouts">
                    <SavedWorkouts/>
                  </div>
                
              </div>
              <div className="col__2">
                <BMI_calculator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
