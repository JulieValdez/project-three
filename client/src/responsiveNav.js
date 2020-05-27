import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/Backdrop/Backdrop";

class ResponsiveNav extends Component {
  state = {
    sideDrawerOpen: false,
    posttitle: "",
    selectcategory: "",
    postbody: "",
    currentselectedcategory: "",
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleinputchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // handleSelectCatChange = (event) => {
  //   this.setState({ selectcategory: event.target.value });
  // };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          posttitle={this.state.posttitle}
          handleinputchange={this.handleinputchange}
          postbody={this.state.postbody}
          selectcategory={this.handleinputchange}
          currentselectedcategory={this.currentselectedcategory}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main></main>
      </div>
    );
  }
}

export default ResponsiveNav;
