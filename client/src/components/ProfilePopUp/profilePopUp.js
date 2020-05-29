import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { Component } from "react";
import axios from "axios";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import BackDrop from "../../components/Backdrop/Backdrop";
import profileToolbar from './profileToolbar';



class profilePopUp extends Component {
  state = {
    sideDrawerOpen: false,
    userhandle: "",
    bio: "",
    website:"",
    interest:"",
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
      userhandle: this.state.userhandle,
      bio: this.state.bio,
      website: this.state.website,
      interest: this.state.interest
    };
    axios.post("/userprofile", post).then((res) => {
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
        <profileToolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          userhandle={this.state.userhandle}
          handleinputchange={this.handleinputchange}
          onSubmit={this.onSubmit}
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


export default profilePopUp;
