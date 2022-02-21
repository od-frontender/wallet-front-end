import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import exitIcon from "./exit.svg";

import s from "./UserMenu.module.scss";
import { useState  } from "react";
import Modal from "../ModalContainer";
import useMediaQuery from '@mui/material/useMediaQuery';



export default function UserMenu() {
  const [showModal, setshowModal] = useState(false);
  const [showModalAv, setshowModalAv] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = () => {
    setshowModal(!showModal);
  };
  const toggleModalAv = () => {
    setshowModalAv(!showModalAv);
  };
  const avatar = useSelector(authSelectors.getUserAvatar);
  // console.log(avatar)
  const addAvatar = (e) => {
    if ((e.currentTarget === e.target)) {
        e.preventDefault();
      const data = new FormData();
      const ava = data.append("avatarURL", e.currentTarget.offsetParent.children[0].elements.file.files[0]);
       dispatch(authOperations.updateAvatar({ava}));

        toggleModalAv();
    }
  };
  const logout = (e) => {
     if ((e.currentTarget === e.target)) {
       dispatch(authOperations.logout());
      
        toggleModal();
    }
  };
  const name = useSelector(authSelectors.getUserName);
  console.log(name)
    
    const matches = useMediaQuery('(min-width:768px)');

  return (
    <> 
      <div className={s.buttonAvaContainer}>
       <button
         type="button"
          className={s.buttonAvaChange}
          onClick={toggleModalAv}
              >
        {<img src={avatar} alt=""  className={s.avatar} />}
         
        </button>
        </div>
      {showModalAv && <Modal onClose={toggleModalAv} children={ 
          <form id="form" action="" encType="multipart/form-data" className={s.formAv}>
          <input name="file" type="file" className={s.inputAv} />
          <div className={s.buttonAv}>
            <button type="submit" className={s.buttonLogoutYN} onClick={addAvatar}>Apply</button>
          <button
              type="button"
              className={s.buttonLogoutYN}
              onClick={toggleModalAv}>Cencel
            </button></div>
    </form>
      } />}
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
      </>
  );
}