import React from 'react';
import Button from './Button';

import '../css/operatorButtons.css'

const buttonValues = ['+', '-', '*', '/'];

class OperatorButtons extends React.Component {
    render () {
        return (
            <div className="component-OperatorButtons">
                {buttonValues.map((value) => {
                    return (
                        <Button 
                        key={value} 
                        colorClass={'operator'} 
                        value={value} 
                        handleClick={this.props.addOperator} 

                        />
                    )
                })}
            </div>
        )
    }

}

export default OperatorButtons;