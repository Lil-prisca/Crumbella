import React from "react";
import logo from "../assets/Logo.png";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaPhone, FaPhoneAlt } from "react-icons/fa";

// ...existing code...
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "nav-link active text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "nav-link text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img
          style={{ width: "150px", marginBottom: "17px" }}
          src={logo}
          alt="Logo"
        />
      </Link>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <span className="">
            <FaTimes className="icon-large close" />
          </span>
        ) : (
          <span className="">
            <FaBars className="icon-large " />
          </span>
        )}
      </button>

      <div className={`navbar-links${menuOpen ? " open" : ""}`}>
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/service" className={linkClass}>
          Services
        </NavLink>
        <NavLink to="/product" className={linkClass}>
          Products
        </NavLink>
        <div className="nav-dropdown">
          <span className="nav-link">Pages</span>
          <div className="dropdown-menu">
            <NavLink to="/team" className={linkClass}>
              Our Team
            </NavLink>
            <NavLink to="/testimonial" className={linkClass}>
              Testimonial
            </NavLink>
            <NavLink to="/404" className={linkClass}>
              404 Page
            </NavLink>
          </div>
        </div>
        <NavLink to="/contact" className={linkClass}>
          Contact Us
          <FaPhoneAlt style={{ marginLeft: "3px" }} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
