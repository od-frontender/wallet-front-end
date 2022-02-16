import React, { useContext, useState } from "react";
import s from './ModalForm.module.scss';
import { ModalContext } from "../ModalContext";


export const Modal = (props) => {
    const { title, children } = props;
    const { closeModal } = useContext(ModalContext);

    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
    }

    document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
    handleClose () 
    closeModal ()
}
});

   const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
     closeModal ()
    }
  };

    const backdropClasses = closing ? 'backdrop backdrop-hide' : 'backdrop';

    return (
        <div className={s.overlay} onClick={handleBackdropClick}>
        <div className={backdropClasses} onClick={handleClose}>
            <div className={s.modal} onClick={(event) => event.stopPropagation()}>
                <div className={s.modal_header}>
                    <h3 className={s.title}>{title}</h3>
                </div>
                <div className={s.modal_body}>
                    {children}
                </div>
            </div>
            </div>
        </div>
    )
}