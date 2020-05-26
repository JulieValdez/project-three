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
                <Col sm={8} md={8}>
                  <div className="userInfoContainer">
                    <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
                      UserName
                    </h3>
                    <br></br>
                    <ProfileAboutMe />
                  </div>
                </Col>
                <Col sm={4} md={4}>
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
                <Col sm={2} md={2}></Col>
                <Col sm={5} md={5}>
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
