import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

const Schema = z.object({
  firstname: z.string({
    required_error: "Firstname is required",
  })
  .min(1, {message: "Firstname is required"}),
  lastname: z.string({
    required_error: "Lastname is required",
  })
  .min(1, {message: "Lastname is required"}),
  username: z.string({
    required_error: "Username is required",
  })
  .min(1, {message: "Username is required"}),
  // phone: z.string({
  //   required_error: "Phone number is required",
  // })
  // .min(1, {message: "Phone number is required"}),
  email: z.string({
    required_error: "Email is required",
  })
  .min(1, {message: "Email is required"}),
  password: z.string({
    required_error: "Password is required",
  })
  .min(1, {message: "Password is required"}),
  passwordConfirm: z.string({
    required_error: "Password confirmation is required",
  })
  .min(1, {message: "Password confirmation is required"}),
});

function Signup({ show, handleClose }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);

    setTimeout(() => {
      console.log("Signup successful!");
      handleClose();
    }, 1000);

    setTimeout(() => {
      console.error("Signup failed!");
    }, 1000);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "25px", fontWeight: "bold" }}>
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstname"
            control={control}
            render={({ field, fieldState }) => (
              <Form.Group className="mb-3" controlId="formBasicFirstname">
                <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Firstname
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your firstname"
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
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
              Lastname
            </Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Enter your lastname"
              {...register("lastname")}
            />
            {errors.lastname && <span>{errors.lastname.message}</span>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
              Username
            </Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter your username"
              {...register("username")}
            />
            {errors.username && <span>{errors.username.message}</span>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Label style={{ fontSize: "15px", fontWeight: "bold" }}>
              Enter Password Again
            </Form.Label>
            <Form.Control
              type="password"
              name="passwordConfirm"
              placeholder="Re-enter your password"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm && (
              <span>{errors.passwordConfirm.message}</span>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <hr />
        <div className="text-center">
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Or</p>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>sign up with:</p>
          <Button variant="danger" className="mb-2">
            <FaGoogle size={30} />
          </Button>
          <Button variant="primary" className="mb-2 ms-3">
            <FaFacebook size={30} />
          </Button>
          <Button variant="info" className="mb-2 ms-3">
            <FaLinkedin size={30} />
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Signup;
