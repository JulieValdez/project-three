import React from "react";
import "./SideDrawer.css";
import SideNav from "../SideNav/sideNav.js";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <div className="sideNavDrawerWrapper">
        <SideNav style={{ display: "block" }} />
      </div>
    </nav>
  );
};

export default sideDrawer;
