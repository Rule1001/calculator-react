import React from 'react';
import Button from './Button';


const ac = ['AC']

class ACAndEquals extends React.Component {
    render () {
        return (
            <div className="component-ACAndEquals">
                {ac.map((value) => {
                    return (
                        <Button key={value} colorClass={'acAndEquals'} value={value} />
                    )
                })}
            </div>
        )
    }
}

export default ACAndEquals;