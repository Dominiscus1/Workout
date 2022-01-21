import React from "react";
import "./Header.css";
import homepageImg from "../../image/homepageImg.jpg";

function Header() {
  return (
    <div className="About component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={homepageImg} alt="" className="homeImg"></img>
          </div>
          <div className="col__2">
            <h1 className="title__heading">Workout</h1>
            <div className="heading__meta">
              <p className="heading__text p__color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
