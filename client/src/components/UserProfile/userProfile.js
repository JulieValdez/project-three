import React, { Component, Fragment } from "react";
import axios from "axios";

class UserProfile extends Component {
  state = {
    user: {
      userId: "",
      userhandle: "your unique id",
      bio: "your bio",
      website: "your website",
      hobbies: "your hobbies",
    },
  };

  componentDidMount() {
    const user = window.localStorage.getItem("userId"); //grabs the userId, string of letters and numbers
    console.log(user);

    axios
      .get("/userprofile/" + user)
      .then((res) => {
        console.log(res);
        if (res.data == null) {
          console.log("ok!");
        } else {
          this.setState({ user: res.data });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Fragment>
        {/* <h1>
          user ID: <strong>{this.state.user.userId}</strong>
        </h1> */}
        <h2>username:</h2>
        <h6>{this.state.user.userhandle}</h6>
        <br></br>
        <h2>bio : {this.state.user.bio}</h2>
        <br></br>
        <h2>website: {this.state.user.website}</h2>
        <br></br>
        <h2>hobbies: {this.state.user.hobbies}</h2>
      </Fragment>
    );
  }
}

export default UserProfile;
