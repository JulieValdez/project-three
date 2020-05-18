import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";
import Logo from "../assets/six.png";
import ProfilePic from "../assets/profilepic.jpeg";

function ProfileCard(props) {
  return (
    <div>
      <Card className="profileCard" style={{ width: "18rem" }}>
        <Card.Img className="center" id="logo" variant="top" src={Logo} />
        <Card.Img
          className="center"
          id="profilePic"
          variant="top"
          src={ProfilePic}
        />

        <Card.Body>
          <Card.Title>User Name Here</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileCard;
