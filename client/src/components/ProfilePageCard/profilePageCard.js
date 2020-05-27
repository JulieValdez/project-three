import React from "react";
import "./profilePageCard.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import PostCard from "../PostCard/postCard";
import { Row, Col, Container } from "react-bootstrap";
import UploadImage from "../UploadImage/uploadImage";
import ProfileAboutMe from "../ProfileAboutMe/profileAboutMe";

const ProfilePageCard = (props) => {
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
                <Col>
                  <UploadImage />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col sm={5} md={5}>
                  <h3 className="myPostsText" style={{ marginLeft: "2rem" }}>
                    My Posts
                  </h3>
                  <PostCard />
                </Col>
                <Col sm={1} md={1}></Col>
                <Col sm={6} md={6}>
                  <PostCard />
                </Col>
              </Row>
            </Container>
          </Figure>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ProfilePageCard;
