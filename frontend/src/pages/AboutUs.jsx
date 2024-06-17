import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoreValues from "./CoreValues";
import Team from "./Professionals";

function AboutUs() {
  return (
    <section className="py-12 py-md-16 py-lg-24 overflow-hidden">
      <Container className="mw-lg mw-md-2xl mx-auto mw-lg-none text-white">
        <div className="mb-32">
          <h1
            className="font-heading mw-4xl text-center mb-24 "
            style={{ fontSize: "4.0rem", fontWeight: "bold" }}
          >
            <u>Redefining Real Estate Experience</u>
          </h1>
          <Row className="mb-32 mt-10">
            <Col md={6}>
              <p
                className="text-secondary-light mt-6 mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                At our company, we aim to redefine the real estate experience by
                providing exceptional service and expertise. Our mission is to
                help clients navigate the complexities of the real estate market
                with confidence. We understand that buying or selling a home is
                one of the most significant financial decisions a person can
                make, and we are dedicated to making that experience as smooth
                and stress-free as possible. Our team of experienced
                professionals is committed to staying ahead of market trends and
                continuously improving our services to better meet the needs of
                our clients.
              </p>
            </Col>
            <Col md={6} className="text-end d-flex align-items-center">
              <img
                className="img-fluid rounded-5 w-100"
                src="https://spatialityblog.com/wp-content/uploads/2024/03/Blog-Banner-Images.jpg"
                alt=""
              />
            </Col>
          </Row>
          <Row className="mb-32">
            <Col md={6} className="order-md-2">
              <p
                className="text-secondary-light mt-4 mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                We value diversity and inclusion, believing that a wide range of
                perspectives enriches our approach and drives innovation. Our
                success is built on the collective efforts of a talented and
                passionate team dedicated to delivering personalized solutions.
                We are committed to fostering a culture of respect, integrity,
                and excellence, where every team member is encouraged to
                contribute their unique insights and ideas. This collaborative
                spirit not only enhances our work environment but also ensures
                that we are providing the best possible service to our clients.
                Our innovative approach allows us to adapt to the ever-changing
                real estate landscape and deliver tailored solutions that meet
                the specific needs of each client.
              </p>
            </Col>
            <Col md={6} className="order-md-1 d-flex align-items-center">
              <img
                className="img-fluid rounded-5 w-100"
                src="https://lirp.cdn-website.com/8bcafc8d/dms3rep/multi/opt/Diversity+reci-640w.jpg"
                alt=""
              />
            </Col>
          </Row>
        </div>
        <CoreValues />
        <Team />
      </Container>
    </section>
  );
}

export default AboutUs;
