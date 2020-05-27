import React from "react";
import "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Dropdown } from "react-bootstrap";
import PopUpToggle from "../PopUp/popUpToggle";
import PropTypes from "prop-types";

const toolbar = ({
  drawerClickHandler,
  posttitle,
  handleInputChange,
  postbody,
  selectcategory,
  onSubmit,
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
        handleInputChange={handleInputChange}
        postbody={postbody}
        selectcategory={selectcategory}
        onSubmit={onSubmit}
      />
      <div className="toolbar_nav-items">
        <ul>
          {/* can use router but here using normal anchor tags below */}
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" style={{ color: "#0a0404" }}>
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{ color: "#0a0404" }}>
                  Another action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" style={{ color: "#0a0404" }}>
                  Something else
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

toolbar.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
  posttitle: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  postbody: PropTypes.string.isRequired,
  selectcategory: PropTypes.string.isRequired,
  handleSelectCatChange: PropTypes.func.isRequired,
};

PropTypes.checkPropTypes();

export default toolbar;
