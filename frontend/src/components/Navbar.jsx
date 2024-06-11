import React from "react";
import { Navbar as NavigationBar, Nav, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Navbar({ handleShowSignup, handleShowLogin }) {
  return (
    <NavigationBar bg="light" expand="lg">
      <Container>
        <div className="d-flex justify-content-center w-100">
          <NavigationBar.Brand
            href="/"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            Real Estate App
          </NavigationBar.Brand>
        </div>
        <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
        <NavigationBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/properties/:id">Property Details</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link onClick={handleShowSignup}>
              <Button>Sign Up</Button>
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
