import { Container, Row, Col } from "react-bootstrap";
import PropertyCard from "../components/PropertyCard";

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
    amenities: ["Garden", "Garage", "CCTV"],
  },
  {
    id: 1,
    name: "Property 1",
    description: "Description 1",
    image_url:
      "https://www.agentadvice.com/wp-content/uploads/2020/12/shutterstock_1247473441-scaled.jpg",
    address: "Address 1",
    price: 100000,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Pool", "Gym"],
  },
  {
    id: 1,
    name: "Property 1",
    description: "Description 1",
    image_url:
      "https://www.agentadvice.com/wp-content/uploads/2020/12/shutterstock_1247473441-scaled.jpg",
    address: "Address 1",
    price: 100000,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Pool", "Gym"],
  },
];

function Home() {
  return (
    <Container>
      <Row className="mt-3">
        {properties.map((property) => (
          <Col key={property.id} className="mb-5">
            <PropertyCard property={property} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
