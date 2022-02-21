import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { authOperations } from './redux/auth';
import { authSelectors } from './redux/auth';
import PrivateRouter from './components/PrivateRouter';
// import PublicRouter from './components/PublicRouter';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const dispatch = useDispatch();
  const isToken = useSelector(authSelectors.getToken);

  useEffect(() => {
    async function getUser() {
      await dispatch(authOperations.login());
    }
    getUser();
  }, [dispatch]);

  return (
    <Routes>
      <Route>
        <Route exact="true" path="/" element={<Navigate to="/dashboard" />} />
        <Route
          exact="true"
          path="/login"
          element={isToken ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          exact="true"
          path="/register"
          redirectTo="/dashboard"
          element={<RegisterPage />}
        />
        <Route
          exact="true"
          path="dashboard/*"
          element={
            <PrivateRouter redirectTo="/login">
              <DashboardPage />
            </PrivateRouter>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
