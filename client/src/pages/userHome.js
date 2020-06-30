import React, { Component } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import ResponsiveNav from "../responsiveNav";
import SideNav from "../components/SideNav/sideNav";
import PostCardList from "../components/PostCardList/postCardList";

class userHome extends Component {
  state = {
    filterCategory: "",
  };

  handleFilterCategoryChange = (filterCategory) => {
    this.setState({ filterCategory: filterCategory.substring(1) });
  };
  render() {
    return (
      <div className="App">
        <div className="postCardList">
          <PostCardList filterCategory={this.state.filterCategory} />
        </div>
        <Wrapper />

        <ResponsiveNav
          handleFilterCategoryChange={this.handleFilterCategoryChange}
        />

        <div className="desktopSideNavContainer">
          <SideNav />
        </div>
      </div>
    );
  }
}

export default userHome;
