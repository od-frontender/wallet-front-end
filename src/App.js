import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { authSelectors } from './redux/auth';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import DashboardPage from './pages/DashboardPage';
import Spinner from './components/Spinner';

function App() {
  const dispatch = useDispatch();
  const isToken = useSelector(authSelectors.getToken);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route
          path="/"
          element={
            isToken ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/register"
          element={
            isToken ? <Navigate to="/dashboard" /> : <RegistrationPage />
          }
        />
        <Route
          path="/login"
          element={isToken ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/dashboard/*"
          element={isToken ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
