import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  phone: z
    .string({
      required_error: "Phone number is required",
    })
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits"),
});

const Booking = ({ propertyId }) => {
  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = (data) => {
    console.log("Booking Details:", { propertyId, ...data });
    setModalMessage("Property booked successfully!");
    setShowModal(true);
    reset();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <>
      {!showForm && (
        <Button
          variant="primary"
          className="ms-3"
          onClick={() => setShowForm(true)}
        >
          Book Now
        </Button>
      )}
      {showForm && (
        <Form onSubmit={handleSubmitForm(handleSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group controlId="bookingName">
                <Form.Label style={{ fontWeight: "bold" }}>Name:</Form.Label>
                <Form.Control
                  type="text"
                  {...field}
                  isInvalid={!!fieldState.error}
                />
                {fieldState.error && (
                  <Form.Control.Feedback type="invalid">
                    {fieldState.error.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group controlId="bookingEmail">
                <Form.Label style={{ fontWeight: "bold" }}>Email:</Form.Label>
                <Form.Control
                  type="email"
                  {...field}
                  isInvalid={!!fieldState.error}
                />
                {fieldState.error && (
                  <Form.Control.Feedback type="invalid">
                    {fieldState.error.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group controlId="bookingPhone">
                <Form.Label style={{ fontWeight: "bold" }}>Phone:</Form.Label>
                <Form.Control
                  type="tel"
                  {...field}
                  isInvalid={!!fieldState.error}
                />
                {fieldState.error && (
                  <Form.Control.Feedback type="invalid">
                    {fieldState.error.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            )}
          />
          <Button variant="primary" type="submit">
            Submit Booking
          </Button>
        </Form>
      )}

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Booking;
