import React, { useCallback, useContext } from "react";
import "./style.css";
import signinGraphic from "../assets/signinGraphic.svg";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../../Auth";

function SignIn({ history }) {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/userhome");
      } catch (error) {
        console.log(error);
        alert("User Not Found");
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/userhome" />;
  }

  return (
    <div className="sign-in">
      <img className="sign-in-graphic" src={signinGraphic} />
      <div className="sign-in-form">
        <Form onSubmit={handleLogin}>
          <label>
            Email
            <br></br>
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <br></br>
            <input name="password" type="password" placeholder="Password" />
          </label>
          <br></br>
          we will never share your password with anyone.
          <Button id="sign-in-button" variant="outline-info" type="submit">
            Sign In
          </Button>
          <br />
          <span id="no-account">Don't have an account?</span>
          <br />
          <Button id="register-button" variant="info" href="/register">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(SignIn);
