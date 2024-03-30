import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item m-3">
            <Link to="/" className="nav-link px-2 text-body-secondary"/>
              Home
          </li>
          <li className="nav-item m-3">
            <Link to="/" className="nav-link px-2 text-body-secondary"/>
              Features
          </li>
          <li className="nav-item m-3">
            <Link to="/" className="nav-link px-2 text-body-secondary"/>
              Pricing
          </li>
          <li className="nav-item m-3">
            <Link to="/" className="nav-link px-2 text-body-secondary"/>
              FAQs
          </li>
          <li className="nav-item m-3">
            <Link to="/" className="nav-link px-2 text-body-secondary"/>
              About
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 DeliDash, Inc</p>
      </footer>
    </div>
  );
}
