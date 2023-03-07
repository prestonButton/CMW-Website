import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./App.css";
import "./components/Nav.css";
import Logo from "./assets/logo.svg";

export default function App() {
  return (
    <Router>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
