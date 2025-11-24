import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <h3 className="about__heading">About Me</h3>
      <p className="about__text">
        As a manager, I lead, inspire, and cultivate a culture of diversity. I communicate clearly and empathetically, striving to build a cohesive and collaborative team. I engage with our customers and internal stakeholders to identify gaps and areas for improvement in both our products and processes.
      </p>
      <p className="about__text">
        I am an experienced engineering leader with a strong technical background, currently driving strategy and optimizing operations as a <strong>Software Engineering Manager</strong> at{" "}
        <a
          href="https://www.workday.com/en-us/products/spend-management/strategic-sourcing.html"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
        >
          Workday
        </a>
        , leading a team focused on high-impact platform functionality.
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
        </a>, connecting people with video editing professionals.
      </p>
      <p className="about__location">
        Based in Toronto, Canada 🇨🇦 • Originally from Brazil 🇧🇷
      </p>
    </div>
  );
}

export default About;
