import React, { Component, Fragment } from "react";
import axios from "axios";
import ProfileDialog from "../ProfilePopUp/profileDialog.js";

class UserProfile extends Component {
  state = {
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
    // console.log("hi");

    axios
      .get("/userprofile/" + this.state.user.userId)
      .then((res) => {
        console.log("res", res);
        if (res.data == null) {
          console.log("data is null!");
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

  render() {
    console.log(this.state);

    return (
      <Fragment>
        <ProfileDialog
          user={this.state.user}
          changeUserState={this.changeUserState}
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
