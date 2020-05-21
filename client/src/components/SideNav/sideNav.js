import React from "react";
import "./sidenav.css";

export function SideNav(props) {
  return (
    <div>
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
  );
}
export default SideNav;
