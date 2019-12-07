import React from "react";
import NavBar from "./components/navbar/navbar.component";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import CompoundCalculator from "./pages/compound-calculator.component";
import About from "./pages/about.component";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/compound-calculator"
          component={CompoundCalculator}
        />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
