import { useEffect } from "react";
import s from "./ModalLogout.module.scss";
// import { useDispatch } from "react-redux";
// import { authOperations } from "../../redux/auth";

export default function Modal({ onClose }) {
  // const dispatch = useDispatch();
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
      
      <div className={s.ModalContent}>
        <span>Are you sure you want to logout?</span>
        <div className={s.buttonView}>
        <button
          type="button"
          className={s.buttonLogoutYN}
          onClick={console.log("() => dispatch(authOperations.logOut())")}>Yes
        </button>
         <button
          type="button"
          className={s.buttonLogoutYN}
          onClick={handleBackdropClick}>No
          </button>
          </div>
      </div>
    </div>
  );
}

