import React from "react";
import { Card } from "react-bootstrap";
import "./postCard.css";

function PostCard(props, { postTitle, selectCategory, postBody, imageId }) {
  const imageUrl = props.post.imageId;
  console.log(imageUrl);
  const stringParts = imageUrl.split("upload/");
  stringParts.splice(1, 0, "upload/w_300,c_scale/");
  const sizedImageUrl = stringParts.join("");
  console.log(sizedImageUrl);

  return (
    <div className="container">
      <div className="post-card" style={{}}>
        <Card.Body>
          <Card.Title className="title">{props.post.postTitle}</Card.Title>
          <Card.Img className="post-img" src={sizedImageUrl} />
          <Card.Text>{props.post.selectCategory}</Card.Text>
          <Card.Text>{props.post.postBody}</Card.Text>
        </Card.Body>
      </div>
    </div>
  );
}

export default PostCard;
