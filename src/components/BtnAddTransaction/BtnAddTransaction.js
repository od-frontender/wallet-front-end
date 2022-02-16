import React, { useContext } from "react";
import s from "./BtnAddTransaction.module.scss";
import { ModalContext } from "../Modal/ModalContext";

const Controls = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleClick = () => {
    openModal({
      title: '',
      children:
        <div>
        <button type="button" className={s.close} onClick={closeModal}></button>
        </div>
    });
  }

  return (
    <div className="Controls">
      <button className={s.btn_transaction} onClick={handleClick}>+</button>
    </div>
  )
};

export default Controls;