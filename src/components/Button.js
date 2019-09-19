
import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => (
  <button onClick={props.func}>
    {props.str}
  </button>
);

Button.propTypes = {
  str: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
