import React, { Component, Fragment } from "react";
import axios from "axios";

class UserProfile extends Component {
  state = {
    user: {
      userId: "",
      userhandle: "",
      website: "",
      bio: "",
      hobbies: "",
    },
  };

  componentDidMount() {
    fetch(window.localStorage.getItem("userId"))
      .then((res) => res.json())
      .then((userId) => {
        this.setState({ user: userId });
        console.log(userId);
      });
    // user = user.userId;
    // this.setState({ user: entireUsersLocalStorageObj });

    axios
      .get("/userprofile/:id")
      .then((res) => {
        console.log(res);
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <h1>
          user ID: <strong>{this.user.userId}</strong>
        </h1>
        <h2>
          username : <strong>{this.user.userhandle}</strong>
        </h2>
        <h2>
          bio : <strong>{this.user.bio}</strong>
        </h2>
        <h2>
          website: <strong>{this.user.website}</strong>
        </h2>
        <h2>
          hobbies: <strong>{this.user.hobbies}</strong>
        </h2>
      </Fragment>
    );
  }
}

export default UserProfile;
