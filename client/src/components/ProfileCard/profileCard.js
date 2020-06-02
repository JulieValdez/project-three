import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";
import Logo from "../assets/six.png";
import ProfilePic from "../assets/profilepic.jpeg";

function ProfileCard(props) {
  return (
    <div>
      <div
        className="profileCard"
        style={{ width: "18rem", backgroundColor: "none" }}
      >
        <Card.Img
          className="center"
          id="logo"
          variant="top"
          src={Logo}
          style={{ marginBottom: "10px" }}
        />
        <Card.Img
          className="center"
          id="profilePic"
          variant="top"
          src={ProfilePic}
        />

        <Card.Body>
          <Card.Title style={{ color: "lightskyblue", textAlign: "center" }}>
            User Handle
          </Card.Title>
          <Card.Text style={{ marginLeft: "20px" }}>
            User Bio Text Here: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit
          </Card.Text>
        </Card.Body>
      </div>
    </div>
  );
}

export default ProfileCard;
