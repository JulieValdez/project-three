import React, { Component } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import ResponsiveNav from "../responsiveNav";
import SideNav from "../components/SideNav/sideNav";
import PostCardList from "../components/PostCardList/postCardList";

class userHome extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper />
        <ResponsiveNav />
        <div className="desktopSideNavContainer">
          <SideNav />
          <PostCardList />
        </div>
      </div>
    );
  }
}

export default userHome;
