import React from "react";
import "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Dropdown } from "react-bootstrap";
import PopUpToggle from "../PopUp/popUpToggle";

const toolbar = ({
  drawerClickHandler,
  posttitle,
  handleinputchange,
  handleImageChange,
  postbody,
  selectcategory,
  onSubmit,
  handlemodalopen,
  modalopenstatus,
  handlemodalclose,
  handleFilterCategoryChange,
}) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/"></a>
      </div>
      <div className="spacer"></div>
      <PopUpToggle
        posttitle={posttitle}
        handleinputchange={handleinputchange}
        handleImageChange={handleImageChange}
        postbody={postbody}
        selectcategory={selectcategory}
        onSubmit={onSubmit}
        handlemodalopen={handlemodalopen}
        modalopenstatus={modalopenstatus}
        handlemodalclose={handlemodalclose}
      />
      <div className="toolbar_nav-items">
        <ul>
          {/* can use router but here using normal anchor tags below */}
          <li></li>
          <li></li>
          <li>
            <Dropdown
              className="filter-dropdown"
              onSelect={handleFilterCategoryChange}
            >
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Filter Posts by Category
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item href="#Fitness" style={{ color: "#0a0404" }}>
                  Fitness
                </Dropdown.Item>
                <Dropdown.Item href="#Recipes" style={{ color: "#0a0404" }}>
                  Recipes
                </Dropdown.Item>
                <Dropdown.Item
                  href="#Mental Health"
                  style={{ color: "#0a0404" }}
                >
                  Mental Health
                </Dropdown.Item>
                <Dropdown.Item href="#Resources" style={{ color: "#0a0404" }}>
                  Resources
                </Dropdown.Item>
                <Dropdown.Item href="#Misc" style={{ color: "#0a0404" }}>
                  Misc
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
