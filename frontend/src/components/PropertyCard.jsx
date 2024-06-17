import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <Card className="custom-card">
      <Card.Img
        variant="top"
        src={property.image_url}
        alt={property.name}
        className="custom-card-img"
      />
      <Card.Body className="custom-card-body" style={{ fontSize: "1.1rem" }}>
        <Card.Title>{property.name}</Card.Title>
        <Card.Text>{property.description.substring(0, 100)}...</Card.Text>
        <Link to={`/properties/${property.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
