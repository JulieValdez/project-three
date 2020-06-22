import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
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
                  {/* <Button id="top-nav-buttons" variant="outline-info" href="#">
										About
									</Button> */}
                  {/* <Nav.Link href="/">Sign In</Nav.Link>

								<Nav.Link href="/">Register</Nav.Link>
								<Nav.Link href="#">About</Nav.Link> */}
                  {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
										<NavDropdown.Item href="#action/3.1">Recipes</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.2">Rentals</NavDropdown.Item>
										<NavDropdown.Item href="#action/3.3">Delivery</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
									</NavDropdown> */}
                </Nav>
                {/* <Form inline>
								<FormControl type="text" placeholder="Search" className="mr-sm-2" />
								<Button variant="outline-success">Search</Button>
							</Form> */}
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
