import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Booking from "./Booking";
import Review from "./Review";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

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
    <Container>
      <Row>
        <Col md={6}>
          <img src={property.image_url} alt={property.name} width="100%" />
        </Col>
        <Col md={6}>
          <h2>{property.name}</h2>
          <p>
            <strong>Location:</strong> {property.location}
          </p>
          <p>
            <strong>Price:</strong> {property.price}
          </p>
          <p>
            <strong>Description:</strong> {property.description}
          </p>
          <p>
            <strong>Size:</strong> {property.size}
          </p>
          <p>
            <strong>Bedrooms:</strong> {property.bedrooms}
          </p>
          <p>
            <strong>Bathrooms:</strong> {property.bathrooms}
          </p>
          <p>
            <strong>Amenities:</strong> {property.amenities}
          </p>
          <Review propertyId={property.id} />
          <Booking propertyId={property.id} />
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;

