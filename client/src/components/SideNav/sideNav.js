import React, {useContext} from "react";
import "./sidenav.css";
import ProfileCard from "../ProfileCard/profileCard";
import app from "../../firebase";
import { Redirect } from 'react-router';

export function SideNav(props) {

  //logging out user and clearing local storage
const handleSignOut = () =>{
  app.auth().signOut();
  localStorage.clear();
  //TODO: redirect logged out user to '/'
  return <Redirect to="/" />
}

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
              <button onClick={handleSignOut} a href="/">Log out</button>
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
