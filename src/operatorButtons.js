import React from 'react';
import Button from './Button';

import './operatorButtons.css'

const buttonValues = ['+', '-', '*', '=', '/'];

class OperatorButtons extends React.Component {
    render () {
        return (
            <div className="component-OperatorButtons">
                {buttonValues.map((value) => {
                    return (
                        <Button colorClass={'operator'} value={value} />
                    )
                })}
            </div>
        )
    }
}

export default OperatorButtons;