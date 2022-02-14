import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';

export default function MenuNavigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active-style' : 'link')}
      >
        <svg width="44" height="44">
          <use href={`${sprite}#icon-home`}></use>
        </svg>
        Home
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) => (isActive ? 'active-style' : 'link')}
      >
        <svg width="44" height="44">
          <use href={`${sprite}#icon-statistics`}></use>
        </svg>
        Statistics
      </NavLink>
      <NavLink
        to="/currency"
        className={({ isActive }) => (isActive ? 'active-style' : 'link')}
      >
        <svg width="44" height="44">
          <use href={`${sprite}#icon-currency`}></use>
        </svg>
        Currency
      </NavLink>
    </nav>
  );
}
