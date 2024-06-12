import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Booking from "./Booking";
import Review from "./Review";

const properties = [
  {
    id: 1,
    name: "Mansionette 1",
    description:
      "This is a modern 5 bedroom mansionatte with 6 bathrooms. All the rooms are ensuite. There is also a large swimming pool and a spacious backyard. There is also a 3 car garage and a huge parking space for more than 5 cars. This home is very secure with CCTV cameras and has an electric fence. It is also located in a very secure place.",
    image_url:
      "https://www.remax-kenya.co.ke/AreaGuideImages/106/2503/21535/7840763/5256-one-house-mydeals.jpg",
    location: "Runda",
    price: "60M",
    size: "1 1/2 Acre",
    bedrooms: 5,
    bathrooms: 6,
    amenities: ["Pool", "Gym", "Garage", "CCTV"],
  },
  {
    id: 2,
    name: "Mansionette 2",
    description:
      "This is a stunning modern 4 bedroom house on a lovely manicured 1-acre garden for rent. The home features a circular living room with a fireplace, a separate formal dining room and an ensuite guest bedroom on the ground floor along with a guest powder room. The modern fitted kitchen with sliding windows has a central island as well as a pantry. The first floor has the other three ensuite bedrooms and a spacious study with a balcony. This home is very secure with CCTV cameras and has an electric fence. ",
    image_url:
      "https://langatalinkrealestate.com/wp-content/uploads/2020/12/WhatsApp-Image-2023-07-14-at-22506-PM-1170x785.png",
    location: "Lang'ata",
    price: "USD 4,000",
    size: "1 Acre",
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Garden", "Garage","CCTV"],
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === parseInt(id, 10));

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
            <strong>Price:</strong> ${property.price}
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
            <strong>Amenities:</strong> {property.amenities.join(", ")}
          </p>
          <h3>Leave a Review</h3>
          <Review propertyId={property.id} />
          <h3>Book Now</h3>
          <Booking propertyId={property.id} />
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
