import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import "./Social.scss";

function Social() {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/ruank"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/ruanltbg"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://instagram.com/ruanltbg"
        target="_blank"
        rel="noopener noreferrer"
        className="social__link"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default Social;
