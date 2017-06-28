import React from 'react';

import './calcDisplay.css'

class CalcDisplay extends React.Component {
    render () {
        return (
            <div>
             <form>
                 <input 
                 className="component-display"
                 type="text"
                 onSubmit={this.props.onSubmit}
                 />
             </form>
            </div>
        )
    }
}

export default CalcDisplay;