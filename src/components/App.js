import React, { Component } from "react";

import NumberButtons from "./numberButtons";
import OperatorButtons from "./operatorButtons";
import ACAndEquals from "./ACAndEquals";
import CalcDisplay from "./calcDisplay";

import "../css/calculator.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNumber: "",
      operator: "",
      rightNumber: ""
    };
    this.addNumber = this.addNumber.bind(this);
    this.addOperator = this.addOperator.bind(this);
  }
  render() {
    return (
      <div className="component-Calculator">

        <div className="component-keypad">
          <h2>CALCULATOR</h2>
          <CalcDisplay leftNumber={this.state.leftNumber} />
          <ACAndEquals />
          <NumberButtons addNumber={this.addNumber} />
          <OperatorButtons addOperator={this.addOperator} />

        </div>
      </div>
    );
  }
  addNumber(e) {
    const value = e.target.innerHTML;
    this.setState({
      leftNumber: this.state.leftNumber + value
    });
  }
  addOperator(e) {
    const value = e.target.innerHTML;
    this.setState({
      operator: value
    });
  }
}

export default App;
