import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./style.css";

function TopNav(props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div className="navbar">
        <div className="row">
          <div className="col-md-12">
            <Navbar
              fixed="top"
              bg=""
              variant="dark"
              expand="lg"
              sticky="top"
              className="top-nav"
            >
              <Navbar.Brand href="/">Six Feet of Separation</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Button id="top-nav-buttons" variant="outline-info" href="/">
                    Sign In
                  </Button>
                  <Button
                    id="top-nav-buttons"
                    variant="outline-info"
                    href="/register"
                  >
                    Register
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopNav;
