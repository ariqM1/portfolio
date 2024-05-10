import React from "react";
import {
  LiaEnvelopeSquareSolid,
  LiaGithubSquare,
  LiaLinkedin,
} from "react-icons/lia";
import "../styles/Home.css";

function Home() {
  return (
    <div className="intro">
      <div className="name">Hello, I'm Ariq</div>
      <div className="me">I'm a full-stack software engineer at Genesys</div>
      <div className="social-icons">
        <a
          href="https://github.com/ariqM1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LiaGithubSquare className="github-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ariq-mukul-b67553205/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LiaLinkedin className="linkedin-icon" />
        </a>
        <a
          href="mailto:ariqmukul@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LiaEnvelopeSquareSolid className="email-icon" />
        </a>
      </div>
    </div>
  );
}

export default Home;
