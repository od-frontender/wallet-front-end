import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.scss';
const greenBtn = s.button + '  ' + s.button_active;
const transperantBtn = s.button + '  ' + s.button_trensperant;

const Button = ({ handleClick, contentBtn, disabled, type, classBtn }) => (
  <button
    disabled={disabled}
    onClick={handleClick}
    className={classBtn === 'green' ? greenBtn : transperantBtn}
    type={type}
  >
    {contentBtn}
  </button>
);

Button.defaultProps = {
  handleClick: () => null,
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  handleClick: PropTypes.func,
  contentBtn: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
