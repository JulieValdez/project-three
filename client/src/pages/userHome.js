import React, { Component } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import ResponsiveNav from "../responsiveNav";
import PopUpToggle from "../components/PopUp/popUpToggle";
import SideNav from "../components/SideNav/sideNav";

class userHome extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper />
        <ResponsiveNav />
        <SideNav />
        <PopUpToggle />
      </div>
    );
  }
}

export default userHome;
