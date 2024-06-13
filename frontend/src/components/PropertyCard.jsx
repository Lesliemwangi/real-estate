import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from'react-router-dom';

// function PropertyCard ({ property }) {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img
//         variant="top"
//         src="https://www.remax-kenya.co.ke/AreaGuideImages/106/2503/21535/7840763/5256-one-house-mydeals.jpg"
//       />
//       <Card.Body>
//         <Card.Title>Mansion 1</Card.Title>
//         <Card.Text>
//           This is a modern 5 bedroom mansionatte with 6 bathrooms. All the
//           rooms are ensuite. There is also a large swimming pool and a spacious
//           backyard. There is also a 3 car garage and a huge parking space for
//           more than 5 cars. This home is very secure with CCTV cameras and has
//           an electric fence. It is also located in a very secure place.
//         </Card.Text>
//         <Link to={`/properties/${property.id}`}>
//           <Button variant="primary">View Details</Button>
//         </Link>
//       </Card.Body>
//     </Card>
//   );
// };

// export default PropertyCard;

const PropertyCard = ({ property }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={property.image_url} alt={property.name} />
      <Card.Body>
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
