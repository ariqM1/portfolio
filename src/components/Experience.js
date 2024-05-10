import React from "react";
import "../styles/Experience.css";

function Resume() {
  return (
    <div className="resume">
      <h1>Ariq Mukul</h1>
      <div className="contact-info">
        <a href="mailto:ariqmukul@gmail.com">ariqmukul@gmail.com</a>{" "}
        <a href="https://github.com/ariqM1">github.com/ariqM1</a>{" "}
        <a
          href="https://www.linkedin.com/in/ariq-mukul-b67553205/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/ariq-mukul
        </a>
      </div>
      <h2>Education</h2>
      <div className="education">
        <h3>Georgia Institute of Technology</h3>
        <p>
          {" "}
          Bachelor of Science in Computer Science <br />
        </p>
      </div>
      <h2>Experience</h2>
      <div className="two-columns">
        <div className="left-column">
          <Experience
            title="Software Engineer"
            company="Genesys"
            date="May 2023"
            description={[
              "Implemented various features into the Genesys Cloud application.",
              "Set up a new step in the CI/CD pipeline that would do security and quality checks on merging code.",
              "Incorporated automated testing paradigms streamlining bug identification by 30% for better code practices.",
            ]}
          />
          <br />
          <br />
          <Experience
            title="Software Engineer Intern"
            company="United Launch Alliance"
            date="May 2022 - August 2022"
            description={[
              "Developed an automated integration testing pipeline using Selenium, fostering a 40% enhancement in testing efficiency.",
              "Created detailed documentation for template scripts, enhancing code reusability and streamlining future development efforts.",
            ]}
          />
        </div>
        <div className="right-column">
          <Experience
            title="Software Engineer"
            company="GA EPD Monitoring Program"
            date="December 2022 - May 2023"
            description={[
              "Engineered an innovative air quality data entry tool complete with built-in analytics, reducing data entry inaccuracies by 40% and propelling data analysis efficiency by 25%.",
              "Implemented AQ data collection via cloud server automation, boosting data processing efficiency.",
              "Employed advanced cloud server technology for expedited data analysis, delivering rapid insights.",
            ]}
          />
        </div>
      </div>
      <h2>Projects</h2>
      <div className="projects">
        <div className="two-columns">
          <div className="right-column">
            <Experience
              title="JustHealth"
              date="Startup providing healthcare transparency through procedure cost
              data, cost comparisons, and data analytics."
              description={[
                "Worked as cofounder, data engineer, and full-stack developer using Python, ReactJS, Node.js, MySQL, and AWS to launch thefirst version of JustHealth's web application.",
                "Placed second overall in Georgia Tech Create-X Capstone Design Competition.",
              ]}
            />
            <Experience
              title="NBA Stats Tracker"
              description={[
                "Designed a user-centric RESTful API, using ExpressJS and NodeJS, following CRUD principles.",
                "Showcased the API's potency by merging it with various open-source applications on Github, thereby offering comprehensive NBA stats analytics.",
              ]}
            />
          </div>
          <div className="left-column">
            <Experience
              title="Discord Siri Bot"
              date="May 2022 - August 2022"
              description={[
                "Developed a Discord bot using Python and the Discord.py library, allowing users to interact with the bot through voice and text commands.",
                "Utilized the Google Cloud Speech-to-Text API to transcribe user speech into text, enabling the bot to recognize and respond to user queries.",
              ]}
            />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="two-columns">
        <div className="left-column">
          <h3>Skills</h3>
          <p>
            <strong>Programming:</strong> Python, Go, React, Javascript,
            Typescript, NextJS, MongoDB, Spring Boot, C++, Rust, Java
          </p>
          <p>
            <strong>Testing:</strong> Jest, Kafka, JUnit, pytest, Mocha, AVA
          </p>
        </div>
        <div className="right-column">
          <h3>Technologies</h3>
          <p>
            AWS (EC2, Serverless, CloudWatch, DynamoDB, Amplify), Google Cloud
            Platform, Git, Kubernetes, Jenkins, Bitbucket, Jira, Confluence,
            Postman, Selenium, Figma,
          </p>
        </div>
      </div>
    </div>
  );
}

function Experience({ title, company, date, description }) {
  return (
    <div className="experience">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p>{date}</p>
      <ul>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
