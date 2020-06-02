import React, { useCallback } from "react";
import { withRouter } from "react-router";
import "./style.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import registerGraphic from "../assets/registerGraphic.svg";
import app from "../../firebase";
import * as firebase from "firebase/app";

function RegisterationForm({ history }) {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        if (firebase.auth().currentUser !== null)
          console.log(firebase.auth().currentUser.uid);
        const userId = firebase.auth().currentUser.uid;
        localStorage.setItem("userId", userId);
        history.push("/userhome");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  return (
    <div className="container-fluid">
      <div className="register" style={{ width: "60%" }}>
        <div className="col-sm-12">
          <img className="register-graphic" src={registerGraphic} />
          <Form onSubmit={handleSignUp}>
            <Row>
              <Col>
                <label>
                  Email <br></br>
                  <input name="email" type="email" placeholder="Email" />
                </label>
              </Col>
              <br></br>
              <Col>
                <label>
                  Password
                  <br></br>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </label>
              </Col>
            </Row>

            <button id="register-button" variant="info" type="submit">
              Register
            </button>

            <br />
            <span id="no-account">Already have an account?</span>
            <br />
            <Button id="sign-in-button" variant="outline-info" href="/">
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RegisterationForm);
