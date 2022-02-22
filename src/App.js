import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { authSelectors } from './redux/auth';
import Spinner from './components/Spinner';

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: 'register-page' */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: 'login-page' */),
);
const DashboardPage = lazy(() =>
  import('./pages/DashboardPage' /* webpackChunkName: 'dashboard-page' */),
);
const NotFoundPage = lazy(() =>
  import(
    './pages/NotFoundPage/NotFoundPage' /* webpackChunkName: 'not-found-page' */
  ),
);

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
          element={isToken ? <Navigate to="/dashboard" /> : <RegisterPage />}
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
