import React from "react";
import "./profilePageCard.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import PostCard from "../PostCard/postCard";
import { Row, Col, Container } from "react-bootstrap";

import ProfileAboutMe from "../ProfileAboutMe/profileAboutMe";

const ProfilePageCard = (props) => {
  console.log(props);

  return (
    <Card className="profilePageCard" style={{ width: "80rem" }}>
      <div className="profilePageCardBody">
        <Card.Body>
          <Figure>
            <Container>
              <Row>
                <Col>
                  <div className="userInfoContainer">
                    <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
                      UserName
                    </h3>
                    <br></br>
                    <ProfileAboutMe />
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Figure>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ProfilePageCard;
