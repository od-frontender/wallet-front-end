import React from 'react';
import PropTypes from 'prop-types';
import s from './BtnIcon.module.scss';

const BtnIcon = ({ type, onClick, children, btnClass, ...allyProps }) => (
  <button
    type={type}
    onClick={onClick}
    className={s.btnIcon}
    {...allyProps}
  >
    {children}
  </button>
);

BtnIcon.defaultProps = {
  onClick: () => null,
  children: null,
  type: 'button',
};

BtnIcon.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default BtnIcon;