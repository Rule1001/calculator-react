import React, { Component } from 'react';

import NumberButtons from './numberButtons';
import OperatorButtons from './operatorButtons';
import ACAndEquals from './ACAndEquals';
import CalcDisplay from './calcDisplay';

import './calculator.css'

class Calculator extends Component {
  render() {
    return (
      <div className="component-Calculator">
        
        <div className="component-keypad">
          <h2>CALCULATOR</h2>
          <CalcDisplay />
          <ACAndEquals />
          <NumberButtons />
          <OperatorButtons />
          
       </div>
      </div>
    );
  }
}

export default Calculator;
