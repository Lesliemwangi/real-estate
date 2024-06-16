import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/propertydetails")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  return (
    <Container>
      <Row className="mt-3">
        {properties.map((property) => (
          <Col key={property.id} md={4} className="mb-5">
            <PropertyCard property={property} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Properties;
