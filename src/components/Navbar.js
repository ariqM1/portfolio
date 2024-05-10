"use client";

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="home">
        <Link to="/">Ariq Mukul</Link>
      </div>
      <ul>
        <li className="projects">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="experience">
          <Link to="/experience">Experience</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
