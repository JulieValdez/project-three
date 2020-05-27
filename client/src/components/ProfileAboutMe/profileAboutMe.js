import React from "react";
import "./profileAboutMe.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProfileAboutMe = (props) => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>About Me:</Form.Label>
        <Form.Control as="textarea" rows="8" />
      </Form.Group>
    </Form>
  );
};

export default ProfileAboutMe;
