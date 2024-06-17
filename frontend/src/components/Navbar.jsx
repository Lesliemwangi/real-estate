import React from "react";
import { Navbar as NavigationBar, Nav, Container } from "react-bootstrap";

function Navbar() {
  return (
    <NavigationBar
      bg="light"
      expand="lg"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <Container fluid>
        <NavigationBar.Brand href="/">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/124/777/small_2x/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg"
            height="40"
            className="d-inline-block align-top"
            alt="Luciannah Ventures logo"
          />
          <span
            className="ml-2"
            style={{ fontSize: "2.0rem", fontWeight: "bold" }}
          >
            Luciannah Ventures
          </span>
        </NavigationBar.Brand>
        <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
        <NavigationBar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-center">
            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Nav.Link
                href="/"
                className="text-center"
                style={{ fontSize: "2.0rem", fontWeight: "bold" }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Nav.Link
                href="/properties"
                className="text-center"
                style={{ fontSize: "2.0rem", fontWeight: "bold" }}
              >
                Properties
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Nav.Link
                href="/about"
                className="text-center"
                style={{ fontSize: "2.0rem", fontWeight: "bold" }}
              >
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Nav.Link
                href="/news"
                className="text-center"
                style={{ fontSize: "2.0rem", fontWeight: "bold" }}
              >
                News
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
              <Nav.Link
                href="/contacts"
                className="text-center"
                style={{ fontSize: "2.0rem", fontWeight: "bold" }}
              >
                Contacts
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
}

export default Navbar;
