import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  const professionals = [
    "Commercial Real Estate Agent",
    "Luxury Real Estate Agent",
    "Real Estate Consultant",
    "Real Estate Broker",
    "Property Manager",
    "Realtor",
    "Real Estate Agent",
  ];

  return (
    <section className="py-12 py-md-16 py-lg-24 overflow-hidden">
      <Container className="mw-lg mw-md-2xl mx-auto mw-lg-none">
        <div className="mb-32">
          <h1 className="font-heading mw-4xl text-center mb-24 text-black">
            <u>Redefining Real Estate Experience</u>
          </h1>
          <Row className="mb-32 mt-10">
            <Col md={6}>
              <p className="fs-5 text-secondary-light mt-6">
                At our company, we aim to redefine the real estate experience by
                providing exceptional service and expertise. Our mission is to
                help clients navigate the complexities of the real estate market
                with confidence.
              </p>
            </Col>
            <Col md={6} className="text-end">
              <img
                className="img-fluid rounded-5"
                src="https://images.pexels.com/photos/7551762/pexels-photo-7551762.jpeg?auto=compress&cs=tinysrgb&w=600g"
                alt=""
              />
            </Col>
          </Row>
          <Row className="mb-32">
            <Col md={6} className="order-md-2">
              <p className="fs-5 text-secondary-light">
                We value diversity and inclusion, believing that a wide range of
                perspectives enriches our approach and drives innovation. Our
                success is built on the collective efforts of a talented and
                passionate team dedicated to delivering personalized solutions.
              </p>
            </Col>
            <Col md={6} className="order-md-1">
              <img
                className="img-fluid rounded-5"
                src="https://images.pexels.com/photos/7551762/pexels-photo-7551762.jpeg?auto=compress&cs=tinysrgb&w=600g"
                alt=""
              />
            </Col>
          </Row>
        </div>
        <div className=" mb-16 mt-5">
          <h3 className="font-heading mb-14 text-black mt-10">
            <u>Our Core Values</u>
          </h3>
          <Row className="mb-32 align-items-center">
            <Col md={6}>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Customer-Centric:</strong>
                  <p>We prioritize customer satisfaction above all else.</p>
                </li>
                <li className="mb-3">
                  <strong>Integrity:</strong>
                  <p>We conduct business with honesty and transparency.</p>
                </li>
                <li className="mb-3">
                  <strong>Innovation:</strong>
                  <p>
                    We continuously innovate to stay ahead in the real estate
                    industry.
                  </p>
                </li>
                <li className="mb-3">
                  <strong>Teamwork:</strong>
                  <p>
                    We believe in collaborative efforts to achieve excellence.
                  </p>
                </li>
                <li>
                  <strong>Community:</strong>
                  <p>
                    We contribute positively to our communities and environment.
                  </p>
                </li>
              </ul>
            </Col>
            <Col md={6} className="text-center">
              <img
                className="img-fluid rounded-5"
                src="https://images.pexels.com/photos/15543045/pexels-photo-15543045/free-photo-of-walls-io-company-values-on-sticky-notes.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Col>
          </Row>
        </div>
        <h3 className="font-heading mb-14 text-center text-white">
          Our Professionals
        </h3>
        <Row className="mb-32">
          {professionals.map((professional, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{professional}</Card.Title>
                  <Card.Text>Description for {professional}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mb-16">
          <h4 className="mb-6 text-center text-white">Meet the Team</h4>
          <p className="text-secondary-light mb-0">
            A dynamic group of individuals united by passion and expertise
          </p>
        </div>
        <Row className="mb-16">
          <Col lg={4} className="mb-8 mb-lg-0">
            <div className="position-relative rounded-3 overflow-hidden">
              <img
                className="img-fluid rounded-5"
                src="solstice-assets/images/about/men-picture.png"
                alt=""
              />
              <div
                className="position-absolute bottom-0 start-0 px-8 py-4 bg-secondary"
                style={{ borderTopRightRadius: "24px" }}
              >
                <span className="d-block display-3 fw-bold text-white mb-2">
                  David Petrucci
                </span>
                <span className="small text-secondary-light">
                  Founder & CEO
                </span>
              </div>
            </div>
          </Col>
          <Col lg={4} className="mb-8 mb-lg-0">
            <div className="position-relative rounded-3 overflow-hidden">
              <img
                className="img-fluid rounded-5"
                src="solstice-assets/images/about/woman-picture2.png"
                alt=""
              />
              <div
                className="position-absolute bottom-0 start-0 px-8 py-4 bg-secondary"
                style={{ borderTopRightRadius: "24px" }}
              >
                <span className="d-block display-3 fw-bold text-white mb-2">
                  Malika Gil
                </span>
                <span className="small text-secondary-light">
                  Operations Manager
                </span>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="position-relative rounded-3 overflow-hidden">
              <img
                className="img-fluid rounded-5"
                src="solstice-assets/images/about/woman-picture1.png"
                alt=""
              />
              <div
                className="position-absolute bottom-0 start-0 px-8 py-4 bg-secondary"
                style={{ borderTopRightRadius: "24px" }}
              >
                <span className="d-block display-3 fw-bold text-white mb-2">
                  Erika Newton
                </span>
                <span className="small text-secondary-light">
                  Growth Marketer
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="position-relative p-8 rounded-3 bg-primary overflow-hidden">
          <div className="position-relative text-center">
            <h4 className="text-white mb-6">Join Us on Our Mission</h4>
            <a
              className="btn btn-sm btn-light bg-white border border-light"
              href="#"
            >
              <span className="me-2">View Careers</span>
              {/* icon */}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
