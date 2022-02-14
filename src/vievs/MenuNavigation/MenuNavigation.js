import { NavLink } from 'react-router-dom';
import Currency from '../../components/Currency/Currency';

export default function MenuNavigation() {
  return (
    <nav>
      <NavLink exact to="/" className="link" activeClassName="activeLink">
        Главная
      </NavLink>
      <NavLink to="/statistics" className="link" activeClassName="activeLink">
        Статистика
      </NavLink>
      <NavLink to="/currency" className="link" activeClassName="activeLink">
        Валюта
        {/* <Currency /> */}
      </NavLink>
    </nav>
  );
}
