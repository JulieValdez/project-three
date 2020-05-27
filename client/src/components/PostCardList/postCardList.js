import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import axios from "axios";
// import PostCard from "../PostCard/postCard";
import "./postCardList.css";

function PostCard(props, { postTitle, selectCategory, postBody }) {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
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
    </Masonry>
  );
}

class PostCardList extends Component {
  constructor(props) {
    super(props);
    this.PostCardList = this.PostCardList.bind(this);

    this.state = { posts: [] };
  }

  componentDidMount() {
    axios.get("/post").then((response) => {
      this.setState({ posts: response.data });
    });
  }

  PostCardList() {
    return this.state.posts.map((currentpost) => {
      return <PostCard post={currentpost} key={currentpost._id} />;
    });
  }

  render() {
    return (
      <div>
        <ul className="postCardList">
          <li>{this.PostCardList()}</li>
        </ul>
      </div>
    );
  }
}

export default PostCardList;
