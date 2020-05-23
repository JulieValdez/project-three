import React from "react";
import "./profilePageCard.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import PostCard from "../PostCard/postCard";
const ProfilePageCard = (props) => {
  return (
    <Card className="profilePageCard" style={{ width: "40rem" }}>
      <Card.Body>
        <Figure>
          <div className="profileContainer">
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="holder.js/171x180"
              style={{ marginLeft: "70%" }}
            />
          </div>

          <PostCard />
        </Figure>
      </Card.Body>
    </Card>
  );
};

export default ProfilePageCard;
