// import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropertyCard from '../components/PropertyCard';

function Home () {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/properties');
//         const data = await response.json();
//         setProperties(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProperties();
//   }, []);

  return (
    <Container>
      <Row className="mt-3">
        {new Array(8).fill(Math.random()).map((_, index) => (
          <Col key={index} className="mb-5">
            <PropertyCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;