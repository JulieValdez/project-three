import React, { useContext } from "react";
import "./sidenav.css";
import ProfileCard from "../ProfileCard/profileCard";
import app from "../../firebase";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../Auth";

export function SideNav(props) {
  //logging out user and clearing local storage
  const handleSignOut = () => {
    app.auth().signOut();
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div>
      <div className="sidebarWrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <ProfileCard />
          </div>

          <ul className="list-unstyled components">
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "lightseagreen",
                  fontWeight: "bold",
                }}
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "lightseagreen",
                  fontWeight: "bold",
                }}
                href="/profile"
              >
                Profile
              </a>
            </li>
            <li>
              <button onClick={handleSignOut}>Log out</button>
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
