import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <header className="hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h1 className="hero-title">Find Your Dream Home</h1>
              <p className="hero-subtitle">
                Discover beautiful properties in your desired location.
              </p>
              <Button variant="primary" size="lg" className="explore-btn">
                Explore Now
              </Button>
            </Col>
          </Row>
        </Container>
      </header>

      <section className="features-section">
        <Container>
          <Row className="justify-content-around">
            <Col md={4} className="text-center feature-box">
              <img src="feature1.jpg" alt="Feature 1" className="feature-img" />
              <h3>Exclusive Listings</h3>
              <p>Explore our exclusive collection of premium listings.</p>
            </Col>
            <Col md={4} className="text-center feature-box">
              <img src="feature2.jpg" alt="Feature 2" className="feature-img" />
              <h3>Expert Agents</h3>
              <p>Our experienced agents are ready to assist you.</p>
            </Col>
            <Col md={4} className="text-center feature-box">
              <img src="feature3.jpg" alt="Feature 3" className="feature-img" />
              <h3>Flexible Financing</h3>
              <p>Learn about our financing options tailored to your needs.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default App;
