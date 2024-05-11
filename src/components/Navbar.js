"use client";
import Link from "next/link"; // Import Link from next/link
import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="home">
        <Link href="/">Ariq Mukul</Link>
      </div>
      <ul>
        <li className="projects">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="experience">
          <Link href="/experience">Experience</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
