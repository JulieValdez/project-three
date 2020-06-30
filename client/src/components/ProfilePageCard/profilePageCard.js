import React from "react";
import "./profilePageCard.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import { Row, Col, Container } from "react-bootstrap";
import UserProfile from "../ProfileforUser/profileForUser";

const ProfilePageCard = (props) => {
  return (
    <Card className="profilePageCard" style={{ width: "70%" }}>
      <div className="profilePageCardBody">
        <Card.Body>
          <Figure>
            <Container>
              <Row>
                <Col style={{ width: "70%" }}>
                  <UserProfile />
                  <p className="aboutMePlaceholder" style={{ color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nunc eget lorem dolor sed viverra ipsum. Non
                    consectetur a erat nam at lectus. Sed viverra ipsum nunc
                    aliquet bibendum enim facilisis gravida neque. Et malesuada
                    fames ac turpis egestas sed tempus urna et. In vitae turpis
                    massa sed elementum tempus. Accumsan sit amet nulla facilisi
                    morbi tempus.
                  </p>
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
