import React from "react";
import Masonry from "react-masonry-css";
import PostCard from "../PostCard/postCard";

function MasonryGrid() {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <div>
        <PostCard />
      </div>
    </Masonry>
  );
}

export default MasonryGrid;
