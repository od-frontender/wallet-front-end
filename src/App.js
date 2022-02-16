import { Routes, Route } from 'react-router';
import MainView from './views/MainView';
import './styles/index.scss';
import AppBar from './components/AppBar/AppBar';

import Currency from './components/Currency';
import TableList from './components/Statistic/Table/TableList';
import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import Container from './components/Container/Container';
import NotFoundView from './components/NotFoundView/NotFoundView';
import DashBoard from './components/DashBoard/DashBoard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true;
  return (
    <>
      <Container>
        {isLoggedIn && <AppBar />}
        {/* <DashBoard /> */}
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>
    </>
  );
}
export default App;
