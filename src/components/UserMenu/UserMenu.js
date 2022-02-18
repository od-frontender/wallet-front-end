// import { useDispatch, useSelector } from "react-redux";
// import { authSelectors, authOperations } from "../../redux/auth";
import exitIcon from "./exit.svg";

import s from "./UserMenu.module.scss";
import { useState  } from "react";
import Modal from "../ModalContainer";
import useMediaQuery from '@mui/material/useMediaQuery';



export default function UserMenu() {
  const [showModal, setshowModal] = useState(false);
  
  const toggleModal = () => {
    setshowModal(!showModal);
  };
   const logout = (e) => {
    if ((e.currentTarget === e.target)) {
      console.log("dispatch(authOperations.logOut())");
        toggleModal();
    }
  };
    // const name = useSelector(authSelectors.getUsername);
    const name = "Dima";
    const matches = useMediaQuery('(min-width:768px)');

  return (
    <div className={s.container}>
      
      <span className={s.name}> {name}</span>
    
      {matches && <div className={s.line}></div>}
       <button
         type="button"
          className={s.buttonLogout}
          onClick={toggleModal}
              >
        {<img src={exitIcon} alt="" width="32" className={s.logoutIcon} />}
          {matches && <div>Logout</div>}
      </button>
      {showModal && <Modal onClose={toggleModal} children={
        <div className={s.ModalContent}>
          <span>Are you sure you want to logout?</span>
          <div className={s.buttonView}>
            <button
              type="button"
              className={s.buttonLogoutYN}
              onClick={logout}>Yes
            </button>
            <button
              type="button"
              className={s.buttonLogoutYN}
              onClick={toggleModal}>No
            </button>
        </div>
        </div>} />}
    </div>
  );
}