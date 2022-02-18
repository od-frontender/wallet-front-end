import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import sprite from '../../images/sprite.svg';
import m from './MenuNavigation.module.scss';

export default function MenuNavigation() {
  return (
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          <nav className={m.nav_menu_mob}>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? m.active : m.link)}
            >
              <svg width="44" height="44">
                <use href={`${sprite}#icon-home`}></use>
              </svg>
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? m.active : m.link)}
            >
              <svg width="44" height="44">
                <use href={`${sprite}#icon-statistics`}></use>
              </svg>
            </NavLink>
            <NavLink
              to="/currency"
              className={({ isActive }) => (isActive ? m.active : m.link)}
            >
              <svg width="44" height="44">
                <use href={`${sprite}#icon-currency`}></use>
              </svg>
            </NavLink>
          </nav>
        ) : (
          <nav className={m.nav_menu_tabl}>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? m.active : m.link)}
            >
              <svg width="24" height="24">
                <use href={`${sprite}#icon-home`}></use>
              </svg>
              Home
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? m.active : m.link)}
            >
              <svg width="24" height="24">
                <use href={`${sprite}#icon-statistics`}></use>
              </svg>
              Statistics
            </NavLink>
          </nav>
        )
      }
    </Media>
  );
}
