import React from "react";

import "./heading-primary.styles.scss";

const HeadingPrimary = ({ title, sub }) => {
  return (
    <div className="heading">
      <h1 className="heading__primary">
        ALL</h1>
      <h1 className="heading__primary">
        IN
      </h1>
      <p className="heading__primary--sub1">vestments</p>
      <h1 className="heading__primary">
        ONE
      </h1>
      <p className="heading__primary--sub2">place</p>


    </div >
  );
};

export default HeadingPrimary;
