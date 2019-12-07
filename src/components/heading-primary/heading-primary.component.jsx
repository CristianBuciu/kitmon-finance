import React from "react";

import "./heading-primary.styles.scss";

const HeadingPrimary = ({ title, sub }) => {
  return (
    <div className="heading">
      <h1 className="heading__primary">
        {title}
        <span className="heading__primary--sub">
          {sub}
        </span>
      </h1>
    </div>
  );
};

export default HeadingPrimary;
