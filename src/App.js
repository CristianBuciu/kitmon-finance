import React from "react";
import NavBar from "./components/navbar/navbar.component";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Tools from "./pages/tools/tools";
import About from "./pages/about/about.component";
import MortgageCalculator from "./components/mortgage-calculator/mortgage-calculator.component";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tools" component={Tools} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/tools/mortgage-calculator"
          component={MortgageCalculator}
        />
      </Switch>
    </div>
  );
}

export default App;
