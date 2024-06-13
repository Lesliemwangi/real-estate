import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import PropertyCard from "../components/PropertyCard";

// const properties = [
//   {
//     id: 1,
//     name: "Mansionette 1",
//     description:
//       "This is a modern 5 bedroom mansionatte with 6 bathrooms. All the rooms are ensuite. There is also a large swimming pool and a spacious backyard. There is also a 3 car garage and a huge parking space for more than 5 cars. This home is very secure with CCTV cameras and has an electric fence. It is also located in a very secure place.",
//     image_url:
//       "https://www.remax-kenya.co.ke/AreaGuideImages/106/2503/21535/7840763/5256-one-house-mydeals.jpg",
//     location: "Runda",
//     price: "60M",
//     size: "1 1/2 Acre",
//     bedrooms: 5,
//     bathrooms: 6,
//     amenities: ["Pool", "Gym", "Garage", "CCTV"],
//   },
//   {
//     id: 2,
//     name: "Mansionette 2",
//     description:
//       "This is a stunning modern 4 bedroom house on a lovely manicured 1-acre garden for rent. The home features a circular living room with a fireplace, a separate formal dining room and an ensuite guest bedroom on the ground floor along with a guest powder room. The modern fitted kitchen with sliding windows has a central island as well as a pantry. The first floor has the other three ensuite bedrooms and a spacious study with a balcony. This home is very secure with CCTV cameras and has an electric fence. ",
//     image_url:
//       "https://langatalinkrealestate.com/wp-content/uploads/2020/12/WhatsApp-Image-2023-07-14-at-22506-PM-1170x785.png",
//     location: "Lang'ata",
//     price: "USD 4,000",
//     size: "1 Acre",
//     bedrooms: 4,
//     bathrooms: 5,
//     amenities: ["Garden", "Garage", "CCTV"],
//   },
//   {
//     id: 3,
//     name: "Mansionette 3",
//     description:
//       "This is a 4 bedroom mansion with 24-hour Electricity, Balcony, Chandelier, Dining Area, En Suite, Hot Water, Kitchen Cabinets, Kitchen Shelf, Tiled Floor, Wardrobe.",
//     image_url:
//       "https://pictures-kenya.jijistatic.com/60395581_MzAwLTIyNC1lNWMzNjc0MmY3.webp",
//     location: "Juja",
//     price: "KES 38.5M",
//     size: "1/4 Acre",
//     bedrooms: 4,
//     bathrooms: 5,
//     amenities: ["Garage", "CCTV"],
//   },
//   {
//     id: 4,
//     name: "Mansionette 4",
//     description:
//       "This is a well-designed home that features a double-storey floor plan and boasts a ground floor with an open-plan kitchen, dining and sitting room. The lounge area leads out onto a lovely pool terrace looking out onto the lovely garden. The first floor hosts four double-sized, air-conditioned and en-suite bedrooms each leading onto a large “wrap around” terrace. Some of the available amenities include a perimeter wall, a private borehole and ample parking.",
//     image_url:
//       "https://langatalinkrealestate.com/wp-content/uploads/2023/07/SC104S-1-592x444.jpg",
//     location: "Diani",
//     price: "KES 40M",
//     size: "0.5 Acre",
//     bedrooms: 4,
//     bathrooms: 5,
//     amenities: ["Garden", "Pool", "Garage", "private borehole"],
//   },
//   {
//     id: 5,
//     name: "Mansionette 5",
//     description:
//       "This is a 5 bedroom mansionatte with 4 bathrooms. The home features a spacious lounge, a separate formal dining room and 2 ensuite bedrooms on the ground floor along with a guest cloakroom. The semi-Open Plan Kitchen with Cabinets also has a pantry. There is also a spacious laundry room. The first floor has the other three ensuite bedrooms, a study room and a spacious family room with a balcony. It also has a spacious parking for more than 8 cars. It is very secure with CCTV cameras and has an electric fence. Its within a Serene and Secure neighborhood and a good place for a family home.",
//     image_url:
//       "https://propscout.co.ke/storage/properties/files/maisonette/thumbnails-5-bedroom-maisonette-for-sale-along-kenyatta-road-vigud.jpg",
//     location: "Kenyatta Road",
//     price: "KES 38M",
//     size: "1/4 Acre",
//     bedrooms: 5,
//     bathrooms: 4,
//     amenities: ["Garden", "Garage", "CCTV"],
//   },
//   {
//     id: 6,
//     name: "Mansionette 6",
//     description:
//       "This is a beautiful 4 bedroom double-storey mansion, all ensuite. This home also features a study room, laundry area, dinning room and a staff quarter for 2 people. It is located in a well-secured gated community of 10 houses in Karen near Bomas of Kenya is available for sale. ",
//     image_url:
//       "https://www.pointproperties.org/wp-content/uploads/2022/08/4-Bedroom-Maisonette-for-Sale-in-Karen-4.jpeg",
//     location: "Karen",
//     price: "KES 75M",
//     size: "1/2 Acre",
//     bedrooms: 4,
//     bathrooms: 3,
//     amenities: ["Garden", "Garage", "Staff quarters", "CCTV"],
//   },
//   {
//     id: 7,
//     name: "Mansionette 7",
//     description:
//       "The villa consists of spacious 5 bedroom 3 ensuite, down stairs consists of spacious living room, kitchen, dinning area and guest room. Upstairs consists of 4 spacious bedroom and tv room. It is located at a prime area and easy access to major shopping malls ideal for family home.",
//     image_url:
//       "https://s3.us-east-2.amazonaws.com/images.propertypro.africa/large/5-bedroom-house-faWlg0DM9f-2238.png",
//     location: "Nyali",
//     price: "KES 38M",
//     size: "1/4 Acre",
//     bedrooms: 5,
//     bathrooms: 6,
//     amenities: ["Tv Room", "Garden", "Garage", "CCTV"],
//   },
//   {
//     id: 8,
//     name: "Mansionette 8",
//     description:
//       "This three-storey house features a ground floor with an entrance hall, a spacious lounge with a fireplace, a formal dining room leading out to the verandah overlooking the manicured garden, a TV room, and a fitted kitchen with a pantry and attached laundry room. The first floor boasts 4 ensuite bedrooms with balconies in two bedrooms. The second floor comprises the attic that can be used as an office or storage. The guest wing is self-contained boasting a spacious lounge with a fitted kitchen, two bedrooms sharing one bathroom and a private verandah.",
//     image_url:
//       "https://langatalinkrealestate.com/wp-content/uploads/2023/12/kar309si.jpg",
//     location: "Karen",
//     price: "USD 1,000,000",
//     size: "1 Acre",
//     bedrooms: 6,
//     bathrooms: 7,
//     amenities: ["Garden", "Pool", "Garage", "CCTV"],
//   },
// ];


const Home = () => {
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

export default Home;
