import React, { Component } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import ResponsiveNav from "../responsiveNav";
import SideNav from "../components/SideNav/sideNav";
import ProfilePageCard from "../components/ProfilePageCard/profilePageCard";

class userProfile extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper />
        <ResponsiveNav />
        <div className="desktopSideNavContainer">
          <SideNav />
        </div>
        <ProfilePageCard />
      </div>
    );
  }
}

export default userProfile;
