import React from "react";

import "./Logo.scss";

function Logo(props) {
  return (
    <div className="row ds-logo">
      <div className="ds-logo__presentation">
        Hello, my name is
      </div>

      <h1 className="ds-logo__title glitch" title="Ruan">
        Ruan
      </h1>
      <h1 className="ds-logo__title glitch" title="Carlos">
        Carlos
      </h1>
    </div>
  )
}

export default Logo
