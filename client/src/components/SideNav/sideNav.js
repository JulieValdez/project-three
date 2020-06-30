import React, { useContext } from "react";
import "./sidenav.css";
import ProfileCard from "../ProfileCard/profileCard";
import app from "../../firebase";

import Button from "react-bootstrap/Button";

export function SideNav(props) {
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
                  color: "lightblue",
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
                  color: "lightblue",
                }}
                href="/profile"
              >
                Profile
              </a>
            </li>
            <li>
              <Button id="button" onClick={handleSignOut}>
                Log Out
              </Button>
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
