import React from 'react';

import '../css/calcDisplay.css'

class CalcDisplay extends React.Component {
    render (props) {
        return (
            <div> 
             <span>
                {this.props.leftNumber || 0}
             </span>
             
            </div>
        )
    }
}

export default CalcDisplay;
/*
 <input 
                 leftNumber
                 className="component-display"
                 type="text"
                 onSubmit={this.props.onSubmit}
                 />
                 */