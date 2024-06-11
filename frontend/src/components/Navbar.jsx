// Navbar.jsx
import React from "react";
import { Navbar as NavigationBar, Nav, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Navbar({ handleShowSignup, handleShowLogin }) {
  return (
    <NavigationBar bg="light" expand="lg">
      <Container>
        <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
        <NavigationBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ fontSize: "20px", fontWeight: "bold" }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/properties/:id"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Property Details
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link onClick={handleShowSignup}>
              <Button >Sign Up</Button>
            </Nav.Link>
            <Nav.Link onClick={handleShowLogin}>
              <Button>Log In</Button>
            </Nav.Link>
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
}

export default Navbar;
