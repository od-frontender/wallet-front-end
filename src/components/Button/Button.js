import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.scss';

const Button = ({ handleClick, contentBtn, disabled, type, button }) => (
  <button
    disabled={disabled}
    onClick={handleClick}
    className={s.button}
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