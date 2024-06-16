// Navbar.jsx
import React from "react";
import { Navbar as NavigationBar, Nav, Container } from "react-bootstrap";

function Navbar() {
  return (
    <NavigationBar
      bg="light"
      expand="lg"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <Container>
        <NavigationBar.Brand href="/">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/124/777/small_2x/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg"
            height="40"
            className="d-inline-block align-top"
            alt="Luciannah Ventures logo"
          />
        </NavigationBar.Brand>
        <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
        <NavigationBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ fontSize: "20px", fontWeight: "bold" }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/properties"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Properties
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/news"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              News
            </Nav.Link>
            <Nav.Link
              href="/contacts"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Contacts
            </Nav.Link>
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
}

export default Navbar;
