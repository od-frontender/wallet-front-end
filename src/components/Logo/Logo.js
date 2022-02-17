import s from "./Logo.module.scss";
import walletIcon from "./walleticon.svg";

export default function AppBar() {
    
  return (
          <div className={s.wallet}>
              <img className={s.walletIcon} src={walletIcon} alt=""  />
              <span>Wallet</span>
          </div>
  );
}