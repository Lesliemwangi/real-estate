import React from "react";
import { Row, Col } from "react-bootstrap";

function CoreValues() {
  return (
    <div className="mb-16 mt-5">
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
              <p>We believe in collaborative efforts to achieve excellence.</p>
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
  );
}

export default CoreValues;
