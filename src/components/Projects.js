"use client";
import React from "react";
import "../styles/Projects.css";
import TileComponent from "./TileComponent";
const projectData = [
  {
    title: "Discord Siri Bot",
    githubLink: "https://github.com/ariqM1/Discord-Siri",
    description:
      "Developed a Discord Bot using JavaScript that allows users to play music, access roles, and create playlists",
  },
  {
    title: "JustHealth",
    githubLink: "https://github.com/abdulchowdhury/justhealth-webapp.git",
    description:
      "Startup providing healthcare transparency through procedure cost data, cost comparisons, and data analytics.",
  },
  {
    title: "Arduino Robot",
    githubLink: "https://github.com/ariqM1/Arduino-Robot-",
    description:
      "Designed and created a robot comprised of a motherboard, sensors, and wheels, wrote commands that the robot executes to change direction and stop motion, and implemented Java methods enabling sensors to detect obstacles in its path and react accordingly.",
  },
  {
    title: "Idea Organizer",
    githubLink: "https://github.com/ariqM1/Idea-Organizer",
    description:
      "Web application that helps you organize you ideas, built in JavaFX!",
  },
  {
    title: "Weather CLI Tool",
    githubLink: "https://github.com/ariqM1/weather_cli_tool",
    description:
      "Command Line Interface tool that allows you to check the weather through terminal.",
  },
];

function Projects() {
  return (
    <div className="project">
      <h1>Projects</h1>
      {projectData.map((project, index) => (
        <div key={index} className="project-tile">
          <TileComponent
            githubLink={project.githubLink}
            title={project.title}
            description={project.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
