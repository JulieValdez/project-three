import React, { Component } from "react";
import TopNav from "../components/TopNav/topNav";
import RegistrationForm from "../components/RegistrationForm/registrationForm";

class userRegister extends Component {
  render() {
    return (
      <div className="App">
        <div className="fullpage">
          <TopNav />
          <RegistrationForm />
        </div>
      </div>
    );
  }
}

export default userRegister;
