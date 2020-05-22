import React from "react";
import "./sidenav.css";
import ProfileCard from "../ProfileCard/profileCard";

export function SideNav(props) {
  return (
    <div>
      <div className="sidebarWrapper" style={{ pointerEvents: "none" }}>
        <nav id="sidebar">
          <div className="sidebar-header">
            <ProfileCard />
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
