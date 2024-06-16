import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const reviewSchema = z.object({
  review: z
    .string({
      required_error: "Review is required",
    })
    .min(3, "Review must be at least 3 characters")
    .max(50, "Review must not exceed 50 characters"),
});

const Review = ({ propertyId }) => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted Review:", { propertyId, review: data.review });
    reset();
    setShowForm(false);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      {!showForm && (
        <Button variant="primary" onClick={() => setShowForm(true)}>
          Add Review
        </Button>
      )}
      {showForm && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="reviewTextArea">
            <Form.Control
              as="textarea"
              rows={3}
              {...register("review")}
              placeholder="Write your review here..."
            />
            {errors.review && (
              <div className="error-message">{errors.review.message}</div>
            )}
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2 mb-3">
            Submit Review
          </Button>
        </Form>
      )}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your review has been submitted successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Review;
