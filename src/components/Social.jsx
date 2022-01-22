import React from "react";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram
} from 'react-icons/io'
import { IconContext } from 'react-icons'

import "./Social.scss"

function Social(props) {
  return (
    <ul className="row ds-social">
      <li>
        <a
          href="https://www.linkedin.com/in/ruancarlos"
          target="_blank"
          title="My Linkedin"
          className="ds-social__link ds-social__linkedin"
        >
          <span className="icon64 linkedin">
            <IconContext.Provider value={{ className: "ds-social__icon" }}>
              <span>
                <IoLogoLinkedin />
              </span>
            </IconContext.Provider>
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ruanltbg"
          target="_blank"
          title="My GitHub Profile"
          className="ds-social__link ds-social__github"
        >
          <span className="icon64 github">
            <IconContext.Provider value={{ className: "ds-social__icon" }}>
              <span>
                <IoLogoGithub />
                </span>
            </IconContext.Provider>
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/ruanltbg"
          target="_blank"
          title="Instagram..."
          className="ds-social__link ds-social__twitter"
        >
          <span className="icon64 instagram">
            <IconContext.Provider value={{ className: "ds-social__icon" }}>
              <span>
                <IoLogoInstagram />
              </span>
            </IconContext.Provider>
          </span>
        </a>
      </li>
    </ul>
  );
}

export default Social;
