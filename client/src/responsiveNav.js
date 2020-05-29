import React, { Component } from "react";
import axios from "axios";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/Backdrop/Backdrop";


class ResponsiveNav extends Component {
  state = {
    sideDrawerOpen: false,
    posttitle: "",
    selectcategory: "",
    postbody: "",
    modalopen: false,
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

  handlemodalopen = (event) => {
    this.setState({ modalopen: true });
  };

  handlemodalclose = (event) => {
    this.setState({ modalopen: false });
  };

  onSubmit = (e) => {
    alert("hello");
    e.preventDefault();

    const post = {
      postTitle: this.state.posttitle,
      selectCategory: this.state.selectcategory,
      postBody: this.state.postbody,
    };
    axios.post("/addpost", post).then((res) => {
      console.log(res.data);
      this.handlemodalclose();
    });
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
          handleinputchange={this.handleinputchange}
          postbody={this.state.postbody}
          onSubmit={this.onSubmit}
          selectcategory={this.selectcategory}
          handlemodalopen={this.handlemodalopen}
          modalopenstatus={this.state.modalopen}
          handlemodalclose={this.handlemodalclose}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main></main>
      </div>
    );
  }
}

export default ResponsiveNav;
