import React, { Component } from 'react';
import NumberButtons from './numberButtons';
import OperatorButtons from './operatorButtons';
import Ac from './Ac';
import CalcDisplay from './calcDisplay';
import Equals from './Equals';
import '../css/calculator.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftNumber: '',
      operator: '',
      standbyOperator: '',
      rightNumber: ''
    };
    this.addNumber = this.addNumber.bind(this);
    this.addOperator = this.addOperator.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
    this.selectorMethod = this.selectorMethod.bind(this);
  }
  render() {
    return (
      <div className="component-Calculator">
        <div className="component-keypad">
          <h2>CALCULATOR</h2>
          <CalcDisplay leftNumber={this.state.leftNumber} />
          <Ac clearMethod={this.clearMethod} />
          <NumberButtons addNumber={this.addNumber} />
          <Equals selectorMethod={this.selectorMethod} />
          <OperatorButtons addOperator={this.addOperator} />
        </div>
      </div>
    );
  }
  addNumber(e) {
    const value = e.target.innerHTML;
    if (!this.state.operator) {
      return this.setState({
        leftNumber: this.state.leftNumber + value
      });
    } else {
      return this.setState({
        rightNumber: this.state.rightNumber + value
      });
    }
  }
  addOperator(e) {
    const value = e.target.innerHTML;
    if (this.state.operator) {
      this.state.standbyOperator = value
    }
    //if leftNumber && rightNumber exist call selector method
    if (this.state.leftNumber && this.state.rightNumber){
      //this.state.operator = value
      return this.selectorMethod()
    } else {
      return this.setState({
        operator: value
      });
    }
  }
  selectorMethod() {
    const operator = this.state.operator;
    if (operator === '+') this.addMethod(Number(this.state.leftNumber), Number(this.state.rightNumber), this.state.standbyOperator);
    if (operator === '-') this.subtractMethod(Number(this.state.leftNumber), Number(this.state.rightNumber), this.state.standbyOperator);
    if (operator === '/') this.divideMethod(Number(this.state.leftNumber), Number(this.state.rightNumber), this.state.standbyOperator);
    if (operator === '*') this.multiplyMethod(Number(this.state.leftNumber), Number(this.state.rightNumber), this.state.standbyOperator);
  }
  //if right number is not an empty string when operator is clicked then call selector method with 
  addMethod(a, b, op) {
    let result = a + b;
    if (op) {
      return  this.setState({
              leftNumber: result,
              rightNumber: '',
              operator : op
      });
    } else {
      return  this.setState({
              leftNumber: result,
              rightNumber: '',
              operator : ''
      });
    }
  }
  subtractMethod(a, b, op) {
    let result = a - b;
    if (op) {
      return  this.setState({
              leftNumber: result,
              rightNumber: '',
              operator : op
      });
    } else {
      return  this.setState({
              leftNumber: result,
              rightNumber: '',
              operator : ''
      });
    }
  }
  divideMethod(a, b, op) {
    let result = a / b;
    if (op) {
      return  this.setState({
              leftNumber: result,
              rightNumber: '',
              operator : op
      });
    } else {
      return  this.setState({
              leftNumber: result,
              rightNumber: '',
              operator : ''
      });
    }
  }
  multiplyMethod(a, b, op) {
    let result = a * b;
    if (op) {
      return  this.setState({
              leftNumber: result,
              rightNumber: '',
              operator : op
      });
    } else {
      return  this.setState({
              leftNumber: result,
              rightNumber: '',
              operator : ''
      });
    }
  }
  clearMethod() {
    return this.setState({
      leftNumber: '',
      rightNumber: '',
      operator: ''
    });
  }
}
export default App;