import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Review = ({ propertyId }) => {
  const [review, setReview] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Review:", { propertyId, review });
    setReview("");
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
            <Form.Control
              as="textarea"
              rows={3}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
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
