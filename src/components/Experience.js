import React from "react";

function Resume() {
  return (
    <div>
      <div>
        <a href="https://github.com/ariqM1">GitHub</a>{" "}
        <a href="mailto:ariqmukul@gmail.com">ariqmukul@gmail.com</a>
      </div>
      <h2>Education</h2>
      <p>
        Georgia Institute of Technology
        <br />
        Bachelor of Science in Computer Science - Concentration in Artificial
        Intelligence and Human-Computer Interaction
      </p>
      <h2>Experience</h2>
      <Experience
        title="Genesys, Software Engineer"
        date="May 2023"
        description={[
          "Implemented various features into the Genesys Cloud application.",
          "Set up a new step in the CI/CD pipeline that would do security and quality checks on merging code.",
          "Incorporated automated testing paradigms streamlining bug identification by 30% for better code practices.",
        ]}
      />
      <Experience
        title="GA EPD Monitoring Program, Software Engineer"
        date="Dec. 2022 - May 2023"
        description={[
          "Engineered an innovative air quality data entry tool complete with built-in analytics, reducing data entry inaccuracies by 40% and propelling data analysis efficiency by 25%.",
          "Implemented AQ data collection via cloud server automation, boosting data processing efficiency.",
          "Employed advanced cloud server technology for expedited data analysis, delivering rapid insights.",
        ]}
      />
      <Experience
        title="United Launch Alliance, Software Engineer Intern"
        date="May - Aug. 2022"
        description={[
          "Developed an automated integration testing pipeline using Selenium, fostering a 40% enhancement in testing efficiency.",
          "Created detailed documentation for template scripts, enhancing code reusability and streamlining future development efforts.",
        ]}
      />
      <h2>Selected Projects</h2>
      <p>
        <strong>Co-Founder, Software Developer of JustHealth</strong>
        <br />
        Startup providing healthcare transparency through procedure cost data,
        cost comparisons, and data analytics. Worked as cofounder, data
        engineer, and full-stack developer using Python, ReactJS, Node.js,
        MySQL, and AWS to launch the first version of JustHealth’s web
        application. Placed second overall in Georgia Tech Create-X Capstone
        Design Competition.
      </p>
      <h2>Skills</h2>
      <p>
        <strong>Programming:</strong> Python, Go, React, Javascript, Typescript,
        NextJS, MongoDB, Spring Boot, C++, Rust, Java
      </p>
      <p>
        <strong>Testing:</strong> Jest, Kafka, JUnit, pytest, Mocha, AVA
      </p>
      <h2>Tools</h2>
      <p>
        Git, Kubernetes, Jenkins, Bitbucket, Jira, Confluence, Postman,
        Selenium, Figma, AWS (EC2, Serverless, CloudWatch, DynamoDB, Amplify),
      </p>
    </div>
  );
}

function Experience({ title, date, description }) {
  return (
    <div>
      <h3>{title}</h3>
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
