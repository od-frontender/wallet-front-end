import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './BtnAddTransaction.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default function BtnAddTransaction({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      const ESC_KEY_CODE = 'Escape';
      if (e.code === ESC_KEY_CODE) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleEventOverlay = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleEventOverlay}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot,
  );
}

BtnAddTransaction.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};