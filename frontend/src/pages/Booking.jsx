import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Booking = ({ propertyId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the booking details to a server
    console.log("Booking Details:", { propertyId, name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
    // After submission, hide the form
    setShowForm(false);
  };

  return (
    <>
      {!showForm && (
        <Button variant="primary" onClick={() => setShowForm(true)}>
          Book Now
        </Button>
      )}
      {showForm && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="bookingName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="bookingEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="bookingPhone">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Booking
          </Button>
        </Form>
      )}
    </>
  );
};

export default Booking;
