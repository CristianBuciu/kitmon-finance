import React from "react";
import ReactDOM from "react-dom";
import lax from "lax.js";
import "./card.styles.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    lax.setup();

    document.addEventListener(
      "scroll",
      function(x) {
        lax.update(window.scrollY);
      },
      false
    );

    lax.update(window.scrollY);
  }

  componentDidMount() {
    this.el = ReactDOM.findDOMNode(this);
    lax.addElement(this.el);
  }

  componentWillUnmount() {
    lax.removeElement(this.el);
  }
  render() {
    return (
      <div className="my-card lax" data-lax-translate-y="0 600 ,800 0">
        <div className="my-card--triangle-top" />
        <div className="my-card--triangle-bottom" />
        <div className="glass-screen">
          <div className="my-card--img-container">
            {this.props.imgSrc}
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
