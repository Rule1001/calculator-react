import React, {Component} from 'react';

import NumberButtons from './numberButtons';
import OperatorButtons from './operatorButtons';
import Ac from './Ac';
import CalcDisplay from './calcDisplay';
import Equals from './Equals';

import '../css/calculator.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      leftNumber: '',
      operator: '',
      rightNumber: ''
    };
    this.addNumber = this.addNumber.bind(this);
    this.addOperator = this.addOperator.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
    this.selectorMethod = this.selectorMethod.bind(this);

  }
  render () {
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
  addNumber (e) {
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
  addOperator (e) {
    const value = e.target.innerHTML;
    this.setState({
      operator: value
    });
  }

  selectorMethod () {

    const operator = this.state.operator;
    if (operator === '+') this.addMethod(Number(this.state.leftNumber), Number(this.state.rightNumber));

  }

  addMethod (a, b) {
    console.log(a, b);
    let result = a + b;

    this.setState({
      leftNumber: result,
      rightNumber: ''

    });

  }
  subtractMethod (a, b) {
    return a - b;
  }

  divideMethod (a, b) {
    return a / b;
  }

  multiplyMethod (a, b) {
    return a * b;
  }


  clearMethod () {
    return this.setState({
      leftNumber: '',
      rightNumber: '',
      operator: ''
    });
  }

}

export default App;
