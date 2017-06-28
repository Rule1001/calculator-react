import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends React.Component {
    render () {
        return (
            <button className={`component-Button ${this.props.colorClass}`}>
                {this.props.value}
            </button>
        )
    }
}

export default Button;