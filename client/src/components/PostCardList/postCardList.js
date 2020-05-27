import React, { Component } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import axios from "axios";
import PostCard from "../PostCard/postCard";
import "./postCardList.css";

class PostCardList extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

//   componentDidMount() {
//     axios.get("/api").then((response) => {
//       this.setState({ posts: response.data }).catch((error) => {
//         console.log(error);
//       });
//     });
//   }

  PostCardList() {
    return this.state.posts.map((post) => {
      return <PostCard post={post} key={post._id} />;
    });
  }

  render() {
    return (
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div>
          <ul className="postCardList">
            <li>{this.PostCardList(<PostCard />)}</li>
          </ul>
        </div>
      </Masonry>
    );
  }
}

export default PostCardList;
