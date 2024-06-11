
import React from 'react';
import { Navbar as NavigationBar, Nav, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <NavigationBar bg="light" expand="lg">
      <Container>
        <NavigationBar.Brand href="/">Real Estate App</NavigationBar.Brand>
        <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
        <NavigationBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
};

export default Navbar;