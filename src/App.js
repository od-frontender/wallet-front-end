import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Media from 'react-media';
import { useEffect, lazy, Suspense } from 'react';
import { authOperations, authSelectors } from "./redux/auth";

import RegisterPage from './pages/RegisterPage/';
import LoginPage from './pages/LoginPage';

import AppBar from './components/AppBar';

import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import Container from './components/Container/Container';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import NotFoundView from './components/NotFoundView/NotFoundView';
import Spiner from '../src/components/Spinner';

import BtnIcon from './components/BtnAddTransaction/BtnIcon/BtnIcon';
import TransactionForm from './components/TransactionForm/TransactionForm';

const MainView = lazy(() =>
  import('./pages/MainView' /* webpackChunkName: "MainView" */),
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
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const isLoggedIn = true;
  return (
    <>
      <Container>
        {isLoggedIn && <AppBar />}
        <RegisterPage />
        <LoginPage />
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
        <BtnIcon>+</BtnIcon>
        <TransactionForm></TransactionForm>
      </Container>
    </>
  );
}
export default App;
