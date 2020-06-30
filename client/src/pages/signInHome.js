import React, { Component } from "react";
import TopNav from "../components/TopNav/topNav";
import PostCardList from "../components/PostCardList/postCardList";
import SignIn from "../components/SignIn/signIn";

class SignInHome extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-8">
            <sign_in></sign_in>

            <TopNav />
            <PostCardList />
          </div>
          <div className="col-sm-4">
            <SignIn />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInHome;
