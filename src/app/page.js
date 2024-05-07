"use client";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Experience from "../components/Experience";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
