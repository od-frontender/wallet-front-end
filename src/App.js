import { Routes, Route, Navigate } from 'react-router-dom';
import Media from 'react-media';
import './styles/index.scss';

import AppBar from './components/AppBar';
import MainView from './views/MainView';
import Currency from './components/Currency';
import TableList from './components/Statistic/Table/TableList';
import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import Container from './components/Container/Container';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFoundView from './components/NotFoundView/NotFoundView';

function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true;
  return (
    <>
      <Container>
        {isLoggedIn && <AppBar />}
        {isLoggedIn && <MenuNavigation />}
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
      </Container>
    </>
  );
}
export default App;
