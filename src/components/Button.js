import React from "react";
import PropTypes from "prop-types";

import "../css/Button.css";

// reFactored a stateless class to be a standard function.
const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className={`component-Button ${props.colorClass}`}>
      {props.value}
    </button>
  );
};

// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         onClick={this.props.handleClick}
//         className={`component-Button ${this.props.colorClass}`}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

export default Button;
