import { Routes, Route, Navigate } from 'react-router-dom';
import Media from 'react-media';
import { lazy, Suspense } from 'react';
import './styles/index.scss';

import AppBar from './components/AppBar';
import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import Container from './components/Container/Container';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import NotFoundView from './components/NotFoundView/NotFoundView';
import Spiner from '../src/components/Spinner';

const MainView = lazy(() =>
  import('./views/MainView' /* webpackChunkName: "MainView" */),
);
const Currency = lazy(() =>
  import('./components/Currency' /* webpackChunkName: "Currency" */),
);
const TableList = lazy(() =>
  import(
    './components/Statistic/Table/TableList' /* webpackChunkName: "TableList" */
  ),
);

function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true;
  return (
    <>
      <Container>
        {isLoggedIn && <AppBar />}
        {isLoggedIn && <MenuNavigation />}
        <Suspense fallback={<Spiner />}>
          <Routes>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <MainView />
                </PrivateRoute>
              }
            />
            <Route
              path="/statistics"
              element={
                <PrivateRoute>
                  <TableList />
                </PrivateRoute>
              }
            />
            <Route
              path="/currency"
              element={
                <PrivateRoute>
                  <Media query="(max-width: 767px)">
                    {matches =>
                      matches ? (
                        <>
                          <Currency />
                        </>
                      ) : (
                        <>
                          <Navigate replace to="/home" />
                        </>
                      )
                    }
                  </Media>
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
export default App;