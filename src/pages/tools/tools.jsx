import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MortgageCalculator from "../../components/mortgage-calculator/mortgage-calculator.component";
import { Container } from "reactstrap";
import "./tools.styles.scss";

const Tools = props => {
  return (
    <Container>
      <div className="tools-page">
        <Link className="tools-page__links" to="/tools/mortgage-calculator">
          Mortgage Calculator
        </Link>
      </div>
    </Container>
  );
};

export default Tools;
