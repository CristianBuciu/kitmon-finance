import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MortgageCalculator from "../../components/mortgage-calculator/mortgage-calculator.component";
import { Container } from "reactstrap";
import "./tools.styles.scss";

const Tools = props => {
  return (
    <Container>
      <div className="tools-page">
        <div className="flex-container">
          <img
            className="tools-page__img"
            src="https://image.flaticon.com/icons/svg/1094/1094837.svg"
            alt="calculadora"
          />
          <Link className="tools-page__links" to="/tools/mortgage-calculator">
            Mortgage Calculator
        </Link>
        </div>
      </div>
    </Container>
  );
};

export default Tools;
