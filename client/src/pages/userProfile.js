import React, { Component } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import ResponsiveNav from "../responsiveNav";

class userProfile extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper />
        <ResponsiveNav />
      </div>
    );
  }
}

export default userProfile;
