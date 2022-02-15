
import UserMenu from "../UserMenu/UserMenu";
import walletIcon from "./walleticon.svg";
import s from "./AppBar.module.scss";

export default function AppBar() {
    
  return (
      <header className={s.header}>
          <div className={s.wallet}>
              <img className={s.walletIcon} src={walletIcon} alt=""  />
              <span>Wallet</span>
          </div>
      <UserMenu />
    </header>
  );
}