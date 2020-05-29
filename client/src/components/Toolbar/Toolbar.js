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
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Filter Posts by Category
              </Dropdown.Toggle>

              <Dropdown.Menu style={{}}>
                <Dropdown.Item href="#/action-1" style={{ color: "#0a0404" }}>
                  Fitness
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "#0a0404" }}>
                  Recipes
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: "#0a0404" }}>
                  Mental Health
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4" style={{ color: "#0a0404" }}>
                  Resources
                </Dropdown.Item>
                <Dropdown.Item href="#/action-5" style={{ color: "#0a0404" }}>
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
