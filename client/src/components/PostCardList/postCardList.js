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
      // console.log(response.data[7].selectCategory);

      this.setState({ posts: response.data });
    });
  }

  //component did update get posts of type category (useEffect if this wasn't a class) prop drilled from userhome
  componentDidUpdate(prevProps, prevState) {
    //if category is different from previous
    if (prevProps.filterCategory !== this.props.filterCategory) {
      console.log("filterCat state has changed.");

      axios.get(`/post/${this.props.filterCategory}`).then((response) => {
        this.setState({ posts: response.data });
      });
    }
  }

  PostCardList() {
    return this.state.posts.map((currentpost) => {
      return (
        <PostCard
          className="masonry-post"
          post={currentpost}
          key={currentpost._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="post-card-list">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {this.PostCardList()}
        </Masonry>
      </div>
    );
  }
}

export default PostCardList;
