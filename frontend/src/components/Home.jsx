import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function HomePage() {
  return (
    <Container fluid className="homePage">
      <Row className="textContainer">
        <Col className="d-flex align-items-center justify-content-center text-white">
          <h1
            className="text-center"
            style={{
              fontSize: "3.0rem",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Find Real Estate & Get Your Dream Place
          </h1>
        </Col>
      </Row>
      <Row className="imgAndIntro">
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Image
            src="https://media.istockphoto.com/id/178447404/photo/modern-business-buildings.jpg?s=612x612&w=0&k=20&c=MOG9lvRz7WjsVyW3IiQ0srEzpaBPDcc7qxYsBCvAUJs="
            alt=""
            fluid
            className="rounded"
            style={{
              maxWidth: "100%",
              height: "auto",
              position: "relative",
              borderRadius: "15px",
            }}
          />
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center">
          <div>
            <p
              className="text-secondary-light mt-6 mb-2 text-white"
              style={{ fontSize: "1.5rem" }}
            >
              Welcome to Luciannah Ventures Real Estate, where excellence meets
              innovation in the realm of property solutions. At Luciannah
              Ventures, we are dedicated to redefining the real estate
              experience through our unwavering commitment to personalized
              service and profound industry expertise. Founded with a vision to
              cater to diverse real estate needs, we specialize in connecting
              individuals and businesses with their ideal properties. Whether
              you are searching for a cozy home, a strategic business location,
              or a lucrative investment opportunity, our mission is to guide you
              every step of the way. What sets Luciannah Ventures apart is our
              holistic approach, blending deep-rooted industry knowledge with a
              passion for delivering tailored solutions. We understand that each
              real estate decision is pivotal, and our team strives to make your
              experience seamless and rewarding. From urban dwellings to
              expansive commercial spaces, our diverse portfolio offers options
              that inspire confidence and meet unique requirements. Embracing a
              culture of integrity and innovation, we foster an environment
              where client satisfaction reigns supreme. Our collaborative spirit
              ensures that every client receives personalized attention,
              ensuring their journey with us is both fulfilling and successful.
              Partner with Luciannah Ventures Real Estate today and embark on a
              journey where unparalleled service meets your aspirations for the
              perfect place to call home or grow your business.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4} className="d-flex justify-content-center">
          <div className="bg-light shadow p-3 mb-5 rounded text-center">
            <p style={{ fontSize: "50px", fontWeight: "bold" }}>15 years</p>
            <p style={{ fontSize: "30px" }}>Years of Experience</p>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <div className="bg-light shadow p-3 mb-5 rounded text-center">
            <p style={{ fontSize: "50px", fontWeight: "bold" }}>5</p>
            <p style={{ fontSize: "30px" }}>Award Gains</p>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <div className="bg-light shadow p-3 mb-5 rounded text-center">
            <p style={{ fontSize: "50px", fontWeight: "bold" }}>100+</p>
            <p style={{ fontSize: "30px" }}>Properties Ready</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
