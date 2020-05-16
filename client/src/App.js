import React, { Component } from "react";
import Wrapper from "./components/Wrapper/wrapper";
import SideNav from "./components/SideNav/sideNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper />
        <SideNav />
      </div>
    );
  }
}

export default App;
