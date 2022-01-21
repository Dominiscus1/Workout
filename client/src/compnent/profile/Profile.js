import React from "react";

function Profile() {
  return (
    <div>
      <div className="bg-container">
        <div className="container">
          <div className="text-center py-5">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt
              class="ui-w-100 rounded-circle"
            />
            <div className="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
              <h4 className="font-weight-bold my-4 text-white">John Doe</h4>
              <div className="text-muted mb-4">
                Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad
                harum primis electram duo, porro principes ei has.
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="d-inline-block text-dark">
                <strong className="text-white">234</strong>
                <span className="text-muted">followers</span>
              </a>
              <a href="#" className="d-inline-block text-dark ml-3">
                <strong className="text-white">111</strong>
                <span className="text-muted">following</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
