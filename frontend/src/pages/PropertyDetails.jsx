import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:8000/properties/${id}`);
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={property.image_url} alt={property.name} width="100%" />
        </Col>
        <Col md={6}>
          <h2>{property.name}</h2>
          <p>
            <strong>Address:</strong> {property.address}
          </p>
          <p>
            <strong>Price:</strong> ${property.price}
          </p>
          <p>
            <strong>Description:</strong> {property.description}
          </p>
          <p>
            <strong>Bedrooms:</strong> {property.bedrooms}
          </p>
          <p>
            <strong>Bathrooms:</strong> {property.bathrooms}
          </p>
          <p>
            <strong>Amenities:</strong> {property.amenities.join(", ")}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
