import React from "react";
import "./sidenav.css";
import ProfileCard from "../ProfileCard/profileCard";
import app from "../../firebase";

export function SideNav(props) {
  return (
    <div>
      <div className="sidebarWrapper" style={{}}>
        <nav id="sidebar">
          <div className="sidebar-header">
            <ProfileCard />
          </div>

          <ul className="list-unstyled components">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <button onClick={() => app.auth().signOut()}>Log out</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default SideNav;
