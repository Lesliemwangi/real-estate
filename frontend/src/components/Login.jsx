import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Login({ show, handleClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === "example@example.com" &&
      formData.password === "password"
    ) {
      console.log("Login successful!");
      handleClose();
    } else {
      console.error("Login failed!");
    }

    setFormData({ email: "", password: "", username: "" });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "25px", fontWeight: "bold" }}>
          Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
              Username
            </Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
        <hr />
        <a href="#" onClick={() => alert("Reset password link sent!")}>
          Forgot Password?
        </a>
        <hr />
      </Modal.Body>
    </Modal>
  );
}

export default Login;
