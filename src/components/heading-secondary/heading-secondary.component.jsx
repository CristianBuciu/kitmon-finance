import React from "react";
import "./heading-secondary.styles.scss";

const HeadingSecondary = ({ text }) => {
  return (
    <h2 className="heading-secondary">
      {text}
    </h2>
  );
};

export default HeadingSecondary;
