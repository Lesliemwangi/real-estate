import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Review = ({ propertyId }) => {
  const [review, setReview] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the review to a server
    console.log("Submitted Review:", review);
    setReview("");
    // After submission, hide the form
    setShowForm(false);
  };

  return (
    <>
      {!showForm && (
        <Button variant="primary" onClick={() => setShowForm(true)}>
          Add Review
        </Button>
      )}
      {showForm && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="reviewTextArea">
            <Form.Label>Write your review:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Review
          </Button>
        </Form>
      )}
    </>
  );
};

export default Review;
