import { Routes, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import Media from 'react-media';
import MainView from '../../views/MainView';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import Currency from '../Currency';
import TableList from '../Statistic/Table/TableList';

export default function DashBoard() {
  return (
    // <>
    //   <h1>GGGGGGGGGGGGGGGGGGGGGGG</h1>
    // </>
    <Media query="(max-width: 768px)">
      {matches =>
        matches ? (
          <>
            <nav>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? 'active-style' : 'link'
                }
              >
                <svg width="44" height="44">
                  <use href={`${sprite}#icon-home`}></use>
                </svg>
              </NavLink>
              <NavLink
                to="/dashboard/statistics"
                className={({ isActive }) =>
                  isActive ? 'active-style' : 'link'
                }
              >
                <svg width="44" height="44">
                  <use href={`${sprite}#icon-statistics`}></use>
                </svg>
                {/* <TableList /> */}
              </NavLink>
              <NavLink
                to="/dashboard/currency"
                className={({ isActive }) =>
                  isActive ? 'active-style' : 'link'
                }
              >
                <svg width="44" height="44">
                  <use href={`${sprite}#icon-currency`}></use>
                </svg>
                {/* <Currency /> */}
              </NavLink>
            </nav>
          </>
        ) : (
          <>
            <MenuNavigation />
            {/* <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/statistics" element={<TableList />} />
            </Routes> */}
          </>
        )
      }
    </Media>
  );
}
