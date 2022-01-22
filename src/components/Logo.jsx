import React from "react";

import "./Logo.scss";

function Logo(props) {
  return (
    <div className="row ds-logo">
      <div className="ds-logo__presentation">
        Hello, my name is
      </div>

      <h1 className="ds-logo__title">
        Ruan <br /> Kovalczyk
      </h1>
    </div>
  )
}

export default Logo
