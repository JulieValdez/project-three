import React from "react";
import "./profilePageCard.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import PostCard from "../PostCard/postCard";
import ProfilePic from "../assets/profilepic.jpeg";
import { Row, Col, Container } from "react-bootstrap";

const ProfilePageCard = (props) => {
  return (
    <Card className="profilePageCard" style={{ width: "80rem" }}>
      <div className="profilePageCardBody">
        <Card.Body>
          <Figure>
            <Container>
              <Row>
                <Col sm={8} md={6}>
                  <div className="userInfoContainer">
                    <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
                      UserName
                    </h3>
                    <br></br>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Tincidunt eget nullam non nisi est. Dolor magna
                      eget est lorem ipsum dolor sit amet consectetur. Tempus
                      imperdiet nulla malesuada pellentesque. Interdum posuere
                      lorem ipsum dolor sit amet consectetur adipiscing. In
                      iaculis nunc sed augue lacus. magna etiam tempor.
                    </p>
                  </div>
                </Col>
                <Col sm={4} md={6}>
                  <div className="profilePicContainer">
                    <Figure.Image
                      width={150}
                      height={150}
                      alt="150x150"
                      src={ProfilePic}
                      rounded
                      style={{ marginLeft: "30%", marginTop: "4rem" }}
                    />
                  </div>
                  <h5 style={{ marginLeft: "35%" }}>User Caption</h5>
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
