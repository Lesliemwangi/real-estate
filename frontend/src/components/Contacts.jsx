import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
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
  subject: z
    .string({
      required_error: "Subject is required",
    })
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must not exceed 100 characters"),
  message: z
    .string({
      required_error: "Message is required",
    })
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

function Contacts() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const onSubmit = (data) => {
    // Simulate form submission (replace with actual logic)
    console.log("Form Data:", data);

    // You can set different messages based on your submission logic
    setModalMessage("Message successfully sent!");

    handleShowModal();

    // Reset form after submission
    reset();
  };

  return (
    <Container className="my-5">
      <h2
        className="text-center mb-4"
        style={{ fontSize: "2.5rem", textDecoration: "underline" }}
      >
        Contact Us
      </h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label
                    style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                  >
                    Name:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    {...field}
                  />
                  {fieldState.error && (
                    <span style={{ color: "red" }}>
                      {fieldState.error.message}
                    </span>
                  )}
                </Form.Group>
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                  >
                    Email address:
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                  {fieldState.error && (
                    <span style={{ color: "red" }}>
                      {fieldState.error.message}
                    </span>
                  )}
                </Form.Group>
              )}
            />

            <Controller
              name="subject"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3" controlId="formBasicSubject">
                  <Form.Label
                    style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                  >
                    Subject:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    {...field}
                  />
                  {fieldState.error && (
                    <span style={{ color: "red" }}>
                      {fieldState.error.message}
                    </span>
                  )}
                </Form.Group>
              )}
            />

            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label
                    style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                  >
                    Message:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    {...field}
                  />
                  {fieldState.error && (
                    <span style={{ color: "red" }}>
                      {fieldState.error.message}
                    </span>
                  )}
                </Form.Group>
              )}
            />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Form Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Contacts;
