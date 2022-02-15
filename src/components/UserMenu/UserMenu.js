// import { useDispatch, useSelector } from "react-redux";
// import { authSelectors, authOperations } from "../../redux/auth";
import exitIcon from "./exit.svg";

import s from "./UserMenu.module.scss";


import useMediaQuery from '@mui/material/useMediaQuery';



export default function UserMenu() {
//   const dispatch = useDispatch();
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
          onClick={console.log("() => dispatch(authOperations.logOut())")}
              >
        {<img src={exitIcon} alt="" width="32" className={s.logoutIcon} />}
          {matches && <div>Выйти</div>}
        </button>
    </div>
  );
}