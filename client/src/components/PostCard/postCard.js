import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

function PostCard(props) {
  return (
    <div className="container">
      <div className="post-card" style={{}}>
        <Card.Img
          className="post-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgOnktiz3y5pOfm1AgVAdbAiCyHyBdcw_W-1IiO1UOMLxPClvH&usqp=CAU"
        />

        <Card.Body>
          <Card.Title className="title">{props.posts.postTitle}</Card.Title>
          <Card.Text>{props.posts.selectcategory}</Card.Text>
          <Card.Text>{props.posts.postbody}</Card.Text>
        </Card.Body>
      </div>
    </div>
  );
}

export default PostCard;
