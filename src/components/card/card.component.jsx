import React from "react";
import ReactDOM from "react-dom";

import "./card.styles.scss";

class Card extends React.Component {
  
  render() {
    return (
      <div className="my-card lax">
        <div className="my-card--triangle-top" />
        <div className="my-card--triangle-bottom" />
        <div className="glass-screen">
          <div className="my-card--img-container">
            <img className="my-card--img" src={this.props.imgSrc} alt="logo"/>
          </div>
          <h2 className="my-card--title">
            {this.props.title}
          </h2>
          <p className="my-card--text">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
