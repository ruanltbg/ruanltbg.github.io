import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <p className="about__text">
        I am a passionate Software Engineer currently working at{" "}
        <a
          href="https://www.workday.com/en-us/products/spend-management/strategic-sourcing.html"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
        >
          Workday Strategic Sourcing
        </a>.
      </p>
      <p className="about__text">
        I am also a <strong>Co-founder</strong> at{" "}
        <a
          href="https://easymovie.io"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
        >
          EasyMovie
        </a>.
      </p>
      <p className="about__location">
        Based in Toronto, Canada 🇨🇦 • Originally from Brazil 🇧🇷
      </p>
    </div>
  );
}

export default About;
