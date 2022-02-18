import { useEffect } from "react";
import s from "./ModalContainer.module.scss";

export default function Modal({ onClose, children }) {
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  
  return (
      <div className={s.ModalBackdrop} onClick={handleBackdropClick}>
        <div className={s.ModalContainer}>
        {children}
        </div>
      </div>
  )
}

