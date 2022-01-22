import React from "react"

import './About.scss'

function About(props) {
  return (
    <div className="row ds-about">
      <p>Hi I am a Software Engineer.</p>
      <p>
        Working at&nbsp;
        <a href="https://www.workday.com/en-us/products/spend-management/strategic-sourcing.html" target="_blank" title="workday.com">
          Workday Strategic Sourcing
        </a>
        <br/>
        I am also a <strong>co-founder</strong> at&nbsp;
        <a href="https://easymovie.io" target="_blank" title="easymovie.io">
          EasyMovie
        </a>.
      </p>
      <p>
        I am located at Toronto Canada 🇨🇦 but I am from Brazil 🇧🇷.
      </p>
    </div>
  )
}

export default About
