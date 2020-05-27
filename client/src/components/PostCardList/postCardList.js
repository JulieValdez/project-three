import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import axios from "axios";
import PostCard from "../PostCard/postCard";
import "./postCardList.css";

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

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
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <ul className="postCardList">
            <li>{this.PostCardList()}</li>
          </ul>
        </Masonry>
      </div>
    );
  }
}

export default PostCardList;
