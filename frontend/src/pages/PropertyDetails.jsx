import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Booking from "./Booking";
import Review from "./Review";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/propertydetails/${id}`)
      .then((response) => response.json())
      .then((data) => setProperty(data))
      .catch((error) =>
        console.error("Error fetching property details:", error)
      );
  }, [id]);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <Container className="mb-5">
      <Button onClick={() => navigate(-1)} className="mb-3">
        Back
      </Button>
      <Row>
        <Col md={6}>
          <div className="property-card">
            <img
              src={property.image_url}
              alt={property.name}
              className="property-image"
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="property-card">
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {property.name}
            </h2>
            <p style={{ fontSize: "1.3rem" }}>
              <strong>Location:</strong> {property.location}
            </p>
            <p style={{ fontSize: "1.3rem" }}>
              <strong>Price:</strong> {property.price}
            </p>
            <p style={{ fontSize: "1.3rem" }}>
              <strong>Description:</strong> {property.description}
            </p>
            <p style={{ fontSize: "1.3rem" }}>
              <strong>Size:</strong> {property.size}
            </p>
            <p style={{ fontSize: "1.3rem" }}>
              <strong>Bedrooms:</strong> {property.bedrooms}
            </p>
            <p style={{ fontSize: "1.3rem" }}>
              <strong>Bathrooms:</strong> {property.bathrooms}
            </p>
            <p style={{ fontSize: "1.3rem" }}>
              <strong>Amenities:</strong> {property.amenities}
            </p>
            <Review propertyId={property.id} />
            <Booking propertyId={property.id} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
