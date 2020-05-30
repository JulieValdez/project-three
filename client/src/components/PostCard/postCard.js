import React from "react";
import { Card } from "react-bootstrap";
import "./postCard.css";

function PostCard(props, { postTitle, selectCategory, postBody, imageId }) {
  return (
    <div className="container">
      <div className="post-card" style={{}}>
        <Card.Img className="post-img" src={props.post.imageId} />

        <Card.Body>
          <Card.Title className="title">{props.post.posttitle}</Card.Title>
          <Card.Text>{props.post.selectCategory}</Card.Text>
          <Card.Text>{props.post.postBody}</Card.Text>
        </Card.Body>
      </div>
    </div>
  );
}

export default PostCard;
