import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(1, { message: "Username is required" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, { message: "Email is required" }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, { message: "Password is required" }),
});

function Login({ show, handleClose }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    if (data.email === "example@example.com" && data.password === "password") {
      console.log("Login successful!");
      handleClose();
    } else {
      console.error("Login failed!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "25px", fontWeight: "bold" }}>
          Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Username
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
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
                <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Email Adress
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
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
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
