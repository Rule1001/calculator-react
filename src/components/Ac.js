import React from 'react';
import Button from './Button';


const ac = ['AC']

class Ac extends React.Component {
    render () {
        return (
            <div className="component-Ac">
                {ac.map((value) => {
                    return (
                        <Button
                        key={value}
                         colorClass={'Ac'} 
                         value={value} 
                         handleClick={this.props.clearMethod}
                         />
                    )
                })}
            </div>
        )
    }
}

export default Ac;