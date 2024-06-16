import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

function Team() {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/professionals")
      .then((response) => response.json())
      .then((data) => setProfessionals(data))
      .catch((error) => console.error("Error fetching professionals:", error));
  }, []);

  return (
    <>
      <h3
        className="font-heading mb-14 text-center text-black"
        style={{ fontSize: "2.5rem" }}
      >
        <u>Our Professionals</u>
      </h3>
      <div className="text-center mb-16">
        <h4
          className="mb-6 text-center text-black"
          style={{ fontSize: "2.0rem" }}
        >
          <u>Meet the Team</u>
        </h4>
        <p className="text-secondary-light mb-0" style={{ fontSize: "1.2rem" }}>
          Our team comprises dedicated professionals who bring diverse skills
          and expertise to the table. Each member is passionate about real
          estate and committed to delivering exceptional service to our clients.
          From commercial real estate agents with a knack for closing deals to
          luxury real estate experts who cater to high-end clientele, our team
          is united by a shared goal: to provide personalized, strategic advice
          that meets the unique needs of every client. Together, we uphold the
          highest standards of professionalism and integrity in everything we
          do, ensuring that our clients receive the best possible outcomes.
        </p>
      </div>
      <Row className="mb-32">
        {professionals.map((professional, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={professional.image_url} />
              <Card.Body>
                <Card.Title>{professional.title}</Card.Title>
                <Card.Text>{professional.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Team;
