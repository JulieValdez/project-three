import React, { Component } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import TopNav from "../components/TopNav/topNav";
import PostCard from "../components/PostCard/postCard";
import SignIn from "../components/SignIn/signIn";

class signInHome extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div class="col-sm-8">
            <sign_in></sign_in>
            <TopNav /> <PostCard />
          </div>
          <div class="col-sm-4">
            <SignIn />
          </div>
        </div>
      </div>
    );
  }
}

export default signInHome;
