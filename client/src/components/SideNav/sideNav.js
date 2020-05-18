import React from "react";
import "./style.css";
import hamburger from "../assets/hamburger.png";
import ProfileCard from "../ProfileCard/profileCard";

function SideNav(props) {
  return (
    <>
      <div className="hamburger">
        <button>
          <img src={hamburger} alt="icon" />
        </button>
      </div>
      <div className="desktop-sidenav" id="deskSideNav">
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <ProfileCard />
            </div>

            <ul className="list-unstyled components">
              <li>
                <a href="userhome">Home</a>
              </li>
              <li>
                <a href="profile">Profile</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
export default SideNav;
