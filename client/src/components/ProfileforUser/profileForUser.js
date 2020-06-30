import React, { Component, Fragment } from "react";
import axios from "axios";

import request from "superagent";
import ProfileDialog from "../ProfilePopUp/profileDialog.js";

class UserProfile extends Component {
  state = {
    open: false,
    APIrequest: false,
    user: {
      userId: localStorage.getItem("userId"),
      userhandle: "",
      bio: "",
      website: "",
      hobbies: "",
      imageId: "",
    },
  };

  componentDidMount() {
    axios
      .get("/userprofile/" + this.state.user.userId)
      .then((res) => {
        if (res.data == null) {
        } else {
          this.setState({ user: res.data });
        }
      })
      .catch((err) => console.log(err));
  }

  changeUserState = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = () => {
    const postprofile = {
      userId: this.state.user.userId,
      userhandle: this.state.user.userhandle,
      bio: this.state.user.bio,
      website: this.state.user.website,
      hobbies: this.state.user.hobbies,
      imageId: this.state.user.imageId,
    };

    axios
      .post("/userprofile", postprofile)
      .then((res) => {
        this.setState({ open: false });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  onPhotoSelected = (files) => {
    const cloudName = "df4dz8nol";
    const uploadPreset = "vy3yda4c";
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const title = "post photo";

    this.setState({ APIrequest: true });

    for (let file of files) {
      request
        .post(url)
        .field("upload_preset", uploadPreset)
        .field("file", file)
        .field("multiple", true)
        .field("tags", title ? `myphotoalbum,${title}` : "myphotoalbum")
        .field("context", title ? `photo=${title}` : "")
        .end((error, response) => {
          this.setState({
            APIrequest: false,
            user: { ...this.state.user, imageId: response.body.secure_url },
          });
        });
    }
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Fragment>
        <ProfileDialog
          user={this.state.user}
          changeUserState={this.changeUserState}
          handleSubmit={this.handleSubmit}
          onPhotoSelected={this.onPhotoSelected}
          handleOpen={this.handleOpen}
          open={this.state.open}
          handleClose={this.handleClose}
          APIrequest={this.state.APIrequest}
        />
        <br></br>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "blueviolet" }}>{this.state.user.userhandle}</h1>

          <br></br>
          <div style={{ color: "#685380" }}>
            <img src={this.state.user.imageId}></img>
            <br></br>
            <h4>bio: {this.state.user.bio}</h4>
            <br></br>
            <h4>website: {this.state.user.website}</h4>
            <br></br>
            <h4>hobbies: {this.state.user.hobbies}</h4>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserProfile;
