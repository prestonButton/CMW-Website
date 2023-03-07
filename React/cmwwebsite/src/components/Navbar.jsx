import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/" className="Logo">
                <img src={Logo} alt="Logo" />
            </Link>
            <div className="linksDiv">
                <Link to="/" className="navLink">
                  Home
                </Link>
                <Link to="about" className="navLink">
                  About
                </Link>
                <Link to="gallery" className="navLink">
                  Gallery
                </Link>
                <Link to="contact" className="navLink">
                  Contact
                </Link>
            </div>
        </nav>
        
    );
}
