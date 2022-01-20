import React, { useState } from "react";
import "./navbar.css";
import logo from "../../image/workoutLogo-c1caca.png";

function Navbar() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(true);
  return (
    <div className="Navbar" id="navbar">
      <div className="header d__flex align__items__center pxy__30">
        <div className="logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="navigation pxy__30">
          <ul className="navbar d__flex">
            <a href="#Home">
              <li className="nav__items mx__15">Home</li>
            </a>
            <a href="#Profile">
              <li className="nav__items mx__15">Profile</li>
            </a>
            <a href="#Workout">
              <li className="nav__items mx__15">Workout</li>
            </a>
            <a href="#Workout">
              <li className="nav__items mx__15">Workout</li>
            </a>
          </ul>
        </div>
        {/* Toogle Menu */}
        <div className="toggle__menu">  
        <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-justify white pointer"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        {show ? (
          <div className="sideNavbar">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#Profile">
                <li className="nav__items mx__15">Profile</li>
              </a>
              <a href="#Workout">
                <li className="nav__items mx__15">Workout</li>
              </a>
              <a href="#Workout">
                <li className="nav__items mx__15">Workout</li>
              </a>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;