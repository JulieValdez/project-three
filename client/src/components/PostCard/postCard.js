import React from "react";
import { Card } from "react-bootstrap";
import "./postCard.css";

function PostCard(props, { postTitle, selectCategory, postBody }) {
  return (
    <div className="container">
      <div className="post-card" style={{}}>
        <Card.Img
          className="post-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgOnktiz3y5pOfm1AgVAdbAiCyHyBdcw_W-1IiO1UOMLxPClvH&usqp=CAU"
        />

        <Card.Body>
          <Card.Title className="title">{props.post.postTitle}</Card.Title>
          <Card.Text>{props.post.selectCategory}</Card.Text>
          <Card.Text>{props.post.postBody}</Card.Text>
        </Card.Body>
      </div>
    </div>
  );
}

export default PostCard;
