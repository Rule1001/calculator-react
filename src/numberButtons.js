import React from 'react';
import Button from './Button';

import './NumberButtons.css'

const buttonValues = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0]

class NumberButtons extends React.Component {
    render () {
        return (
            <div className="component-NumberButtons">
                {buttonValues.map((value) => {
                    return (
                        <Button colorClass={'number'} value={value} />
                    )
                })}
            </div>
        )
    }
}

export default NumberButtons;