"use client";

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <span>
        <Link to="/">Ariq&nbsp;Mukul</Link>
      </span>
      <span>
        <Link to="/projects">Projects</Link>
      </span>
      <span>
        <Link to="/experience">Experience</Link>
      </span>
    </nav>
  );
}

export default Navbar;
