import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Ramiro Sicilia</h1>
      <nav className="nav-links">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About
        </NavLink>
        <NavLink to="/projects" className="nav-item">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
