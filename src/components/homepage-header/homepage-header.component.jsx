import React from "react";
import HeadingPrimary from "../heading-primary/heading-primary.component";
import { Container } from "reactstrap";
import "./homepage-header.styles.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="triangle-1" />
        <div className="triangle-2" />
        <Container>
          <HeadingPrimary />
        </Container>
      </header>
    );
  }
}
export default Header;
