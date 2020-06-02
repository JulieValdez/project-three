import React from "react";
import "./profilePageCard.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import { Row, Col, Container } from "react-bootstrap";
import ProfilePic from "../assets/profilepic.jpeg";
import ProfileDialog from "../../components/ProfilePopUp/profileDialog";
import UserProfile from "../../components/UserProfile/userProfile";

const ProfilePageCard = (props) => {
  // console.log(props);

  return (
    <Card className="profilePageCard" style={{ width: "100%" }}>
      <div className="profilePageCardBody">
        <Card.Body>
          <Figure>
            <Container>
              <Row>
                <Col>
                  <ProfileDialog />
                  <UserProfile />
                  {/* <div className="userInfoContainer">
										<div className="profilePicPlaceholder">
											<Card.Img
												className="center"
												id="profilePic"
												variant="center"
												src={ProfilePic}
											/>
										</div>
										<h3
											style={{ textAlign: 'center', marginTop: '2rem' }}
											className="userNamePlaceholder"
										>
											Jane Doe
										</h3>
										<br />
										<h6>About Me:</h6>
										<p className="aboutMePlaceholder">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor
											sed viverra ipsum. Non consectetur a erat nam at lectus. Sed viverra ipsum
											nunc aliquet bibendum enim facilisis gravida neque. Et malesuada fames ac
											turpis egestas sed tempus urna et. In vitae turpis massa sed elementum
											tempus. Accumsan sit amet nulla facilisi morbi tempus. Amet justo donec enim
											diam vulputate ut pharetra. Tincidunt arcu non sodales neque sodales ut
											etiam sit amet. Nunc non blandit massa enim nec dui nunc mattis enim. Neque
											egestas congue quisque egestas diam in arcu cursus. Risus ultricies
											tristique nulla aliquet enim tortor at auctor urna.
										</p>
									</div> */}
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
