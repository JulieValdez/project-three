import React from "react";
import "./style.css";
import hamburger from "../assets/hamburger.png";

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
              <h3>Area where profile card and logo go</h3>
            </div>

            <ul className="list-unstyled components">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Profile</a>
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
