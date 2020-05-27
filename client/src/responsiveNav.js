import React, { Component } from "react";
import axios from "axios";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/Backdrop/Backdrop";

class ResponsiveNav extends Component {
  state = {
    sideDrawerOpen: false,
    posttitle: "",
    selectcategory: "Fitness",
    postbody: "",
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSelectCatChange = (event) => {
    this.setState({ selectcategory: event.target.value });
  };

  onSubmit = (e) => {
    alert("hello");
    e.preventDefault();

    const post = {
      postTitle: this.state.posttitle,
      selectCategory: this.state.selectcategory,
      postBody: this.state.postbody,
    };
    axios.post("/addpost", post).then((res) => console.log(res.data));
  };

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
          handleInputChange={this.handleInputChange}
          postbody={this.state.postbody}
          selectcategory={this.handleSelectCatChange}
          onSubmit={this.onSubmit}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main></main>
      </div>
    );
  }
}

export default ResponsiveNav;
