import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  {
    /* Now I need to use the <FaBars /> and <FaTimes />
                icons to implement  responsiveness. If the screen width is less than 
                800px, we need to display <FaBars /> in the navbar, and when the user clicks
                on it, the .navLink items are stacked full width, vertically, and <FaTimes /> 
                is in the top-right corner. If the user clicks <FaTimes /> the .navLinks items disappear*/
  }
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(true);
  const isResponsive = width < 800;
  const handleClick = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="Logo">
        <img src={Logo} alt="Logo" />
      </Link>
      {/* If the Screen is less than 800px wide (isResponsive) hide the navLinks,
      instead show <FaBars />. Then, if the user clicks on <FaBars /> display the navLink items,
      The background should be the same as the navBar, and should cover the full
      screen width. The <FaBars /> element should switch to the <FaTimes /> element.
      If the user clicks on the <FaTimes /> element, the navLink items should disappear 
      and the <FaTimes /> element should switch back to the <FaBars /> element*/}
      <div className="linksDiv">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="about" className="navLink ">
          About
        </Link>
        <Link to="gallery" className="navLink ">
          Gallery
        </Link>
        <Link to="contact" className="navLink ">
          Contact
        </Link>
        <div className="iconsDiv">
          <FaBars className="bars" onClick={handleClick} />

          <FaTimes className="times" onClick={handleClick} />
        </div>
      </div>
    </nav>
  );
}
