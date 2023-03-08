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
    const handleClick = () => setIsOpen(prevIsOpen => !prevIsOpen);
    
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return(
            window.removeEventListener("resize", handleResize)
        )
    }, []);

    return (
        <nav className="navbar">
            <Link to="/" className="Logo">
                <img src={Logo} alt="Logo" />
            </Link>
            <div className="linksDiv">
                {!isResponsive && <Link to="/" className="navLink">
                  Home
                </Link>}
                {!isResponsive && <Link to="about" className="navLink">
                  About
                </Link>}
                {!isResponsive && <Link to="gallery" className="navLink">
                  Gallery
                </Link>}
                {!isResponsive && <Link to="contact" className="navLink">
                  Contact
                </Link>}
                {isResponsive  && !isOpen && <FaBars className="bars" onClick={handleClick} />}
                {isResponsive && isOpen && <FaTimes className="times" onClick={handleClick} />}
            </div>
        </nav>


        
    );
}
