import React from "react";
import { Link } from "react-router-dom";
import logoFull from "../assets/logo-full.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--logo-div">
        <div className="footer--links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <img
          src={logoFull}
          alt="Community Metalworks Logo"
          className="footer--logo"
        />
        <div className="footer--about">
          <p>24 Riverview Drive Marlboro NY 12542</p>
          <p>Monday - Friday, 8:00am - 4:30pm</p>
        </div>
      </div>

      {/* <div className='copyright'>
                <p>Copyright &copy; {document.write(new Date().getFullYear())} Community Metalworks. All Rights Reserved</p>
            </div> */}
    </footer>
  );
}
