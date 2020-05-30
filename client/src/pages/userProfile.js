import React, { Component } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import ResponsiveNav from "../responsiveNav";
import SideNav from "../components/SideNav/sideNav";
import ProfilePageCard from "../components/ProfilePageCard/profilePageCard";

class userProfile extends Component {
  render(props) {
    console.log(props);

    return (
      <div className="App">
        <Wrapper />
        <div className="responsiveNav">
          <ResponsiveNav />
        </div>

        <div className="desktopSideNavContainer">
          <SideNav />
        </div>
        <div className="profilePageCard">
          <ProfilePageCard />
        </div>
      </div>
    );
  }
}

export default userProfile;
