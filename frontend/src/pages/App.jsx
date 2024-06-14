import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./app.css"
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Signup from "../components/SignUp";
import Login from "../components/Login";

function App() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowSignupModal = () => setShowSignupModal(true);
  const handleCloseSignupModal = () => setShowSignupModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  return (
    <>
      <Header />
      <Navbar
        handleShowSignup={handleShowSignupModal}
        handleShowLogin={handleShowLoginModal}
      />
      <Signup show={showSignupModal} handleClose={handleCloseSignupModal} />
      <Login show={showLoginModal} handleClose={handleCloseLoginModal} />

      <Outlet />
    </>
  );
}

export default App;
