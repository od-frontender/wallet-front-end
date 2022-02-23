import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import s from './BtnAddTransaction.module.scss';
import Modal from '../ModalContainer';
import TransactionForm from '../TransactionForm';
import plus from '../../images/plus.svg';

export default function BtnAddTransaction() {
  const [showModal, setshowModal] = useState(false);
  const toggleModal = () => {
    setshowModal(!showModal);
  };
  return (
    <>
      <button type="button" onClick={toggleModal} className={s.btn}>
        <svg width="20" height="20">
          <use href={`${plus}#icon-untitled`}></use>
        </svg>
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <TransactionForm onClose={toggleModal}></TransactionForm>
        </Modal>
      )}
    </>
  );
}
