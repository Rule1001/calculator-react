import React from 'react';
import Button from './Button';


const equals = ['=']

class Equals extends React.Component {
    render () {
        return (
            <div className="component-Equals">
                {equals.map((value) => {
                    return (
                        <Button
                        key={value}
                         colorClass={'Equals'} 
                         value={value} 
                         handleClick={this.props.selectorMethod}
                         />
                    )
                })}
            </div>
        )
    }
}

export default Equals;