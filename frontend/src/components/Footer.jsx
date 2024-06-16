import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>
              <u>Luciannah Ventures</u>
            </h5>
            <p>
              Luciannah Ventures is dedicated to providing exceptional real
              estate solutions with a focus on customer satisfaction and
              community impact.
            </p>
          </div>
          <div className="col-md-4">
            <h5>
              <u>Links</u>
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-dark">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-dark">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>
              <u>Contact Info</u>
            </h5>
            <p>Address: 123 Main St, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>
              &copy; {new Date().getFullYear()} Luciannah Ventures. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
