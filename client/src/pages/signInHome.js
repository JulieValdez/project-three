import React, { Component } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import ResponsiveNav from "../responsiveNav";

class signInHome extends Component {
  render() {
    return (
      <div className="home">
        <Wrapper />
        <ResponsiveNav />
      </div>
    );
  }
}

export default signInHome;
