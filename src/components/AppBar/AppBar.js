import UserMenu from '../UserMenu/UserMenu';
import Logo from '../Logo';
import s from './AppBar.module.scss';

export default function AppBar() {
  return (
    <header className={s.header}>
      <Logo />
      <UserMenu />
    </header>
  );
}
