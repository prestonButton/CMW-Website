import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";
import "./Navbar.css";

// Create a div that holds the icons for when the screen is small.
// if the screen is small, then the icons will be displayed. If the menu is open,
// then the <FaTimes /> icon will be displayed. If the menu is closed, then the
// <FaBars /> icon will be displayed.
// When clicked it will close the menu if it is open, or open the menu if it is closed.
// The menu will be closed by default.
// the icon will toggle between the two icons depending on the state of the menu.
function Icons(props) {
  return (
    (props.isResponsive && (
      <div className="icons">
        {props.isMenuOpen ? (
          <FaTimes onClick={props.onClick} className="icon" />
        ) : (
          <FaBars onClick={props.onClick} className="icon" />
        )}
      </div>
    )) ||
    null
  );
}
// create a div that holds the navigation links for the website.
// they are displayed normally if the screen is large, or if the screen is small
// and the menu is open, they will be displayed in a column.
// if the screen is small and the menu is closed, then the links will not be displayed.
function Links(props) {
  return (
    <div
      // sorry about the nested ternary, but if the screen is small and the menu is open,
      // then the links will be displayed. If the screen is small and the menu is closed,
      // then the links will not be displayed. If the screen is large, then the links will
      // be displayed.
      className={
        props.isResponsive
          ? props.isMenuOpen
            ? "responsive"
            : "hidden"
          : "navLinks"
      }
    >
      <Link to="/" className="navLink" onClick={props.onClick}>
        Home
      </Link>
      <Link to="/about" className="navLink" onClick={props.onClick}>
        About
      </Link>
      <Link to="/gallery" className="navLink" onClick={props.onClick}>
        Gallery
      </Link>
      <Link to="/contact" className="navLink" onClick={props.onClick}>
        Contact
      </Link>
    </div>
  );
}

//create the navbar component

export default function Navbar() {
  //Create state variables for the menu and screen size:
  //isMenuOpen is the state variable for the menu. It is true if the menu is open,
  //and false if the menu is closed.
  //setIsMenuOpen is the function that will change the state of the menu.
  //isResponsive is the state variable for the screen size. It is true if the screen
  //is small, and false if the screen is large.
  //setIsResponsive is the function that will change the state of the screen size.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 700);

  //Create a function that will change the state of the menu when the icon is clicked.
  //If the menu is open, then it will close the menu. If the menu is closed, then it
  //will open the menu.
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  //Create a function that will change the state of the screen size when the window is resized.
  //If the screen is small, then it will set the state to true. If the screen is large, then
  //it will set the state to false.
  const handleResize = () => {
    window.innerWidth <= 700 ? setIsResponsive(true) : setIsResponsive(false);
  };

  //Create a function that will change the state of the menu when the window is resized.
  //If the screen is small, then it will close the menu. If the screen is large, then
  //it will open the menu.
  const handleResizeMenu = () => {
    window.innerWidth <= 800 ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  //Create a function that will change the state of the screen size and menu when the window
  //is resized.
  const handleResizeAll = () => {
    handleResize();
    handleResizeMenu();
  };

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  //Add an event listener that will call the handleResizeAll function when the window is resized.
  useEffect(() => {
    window.addEventListener("resize", handleResizeAll);
    return () => window.removeEventListener("resize", handleResizeAll);
  });

  //return the navbar component
  return (
    <div className={isMenuOpen ? "navbar" : "navbar closed"}>
      <Link to="/" className="logo" onClick={closeNavbar}>
        <img src={logo} alt="logo" />
      </Link>

      <Icons
        isResponsive={isResponsive}
        isMenuOpen={isMenuOpen}
        onClick={toggleMenu}
      />
      <Links
        isResponsive={isResponsive}
        isMenuOpen={isMenuOpen}
        onClick={closeNavbar}
      />
    </div>
  );
}
