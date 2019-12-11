import React from "react";
import "./mortgage-calculator.styles.scss";
import { Container } from "reactstrap";

const MortgageCalculator = () => {
  return (
    <Container>
      <div className="mortgage-calculator">
        <div className="mortgage-calculator__header">
          <img
            className="mortgage-calculator__img"
            src="https://image.flaticon.com/icons/svg/1094/1094837.svg"
            alt="calculadora"
          />
          <h1 className="mortgage-calculator__title">Mortgage Calculator</h1>
        </div>
        <iframe className="mortgage-calculator__iframe"
          title="mortgage-calculator"
          src="https://www.mortgagecalculator.org/webmasters/?downpayment=50000&homevalue=300000&loanammount=250000&interestrate=0&loanterm=30&propertytax=2400&pmi=1&homeinsurance=1000&monthlyhoa=0"
          style={{ width: "100%", height: 1000, border: 0 }}
        />
      </div>
    </Container>
  );
};

export default MortgageCalculator;


