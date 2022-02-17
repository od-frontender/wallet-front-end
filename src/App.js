import { Routes, Route } from 'react-router';
import MainView from './views/MainView';
import './styles/index.scss';
import AppBar from './components/AppBar';

import Currency from './components/Currency';
import TableList from './components/Statistic/Table/TableList';

import RegisterPage from './pages/RegisterPage/';
import LoginPage from './pages/LoginPage';

import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import Container from './components/Container/Container';
import NotFoundView from './components/NotFoundView/NotFoundView';

function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true;
  return (
    <>
      <Container>
        {isLoggedIn && <AppBar />}
        <RegisterPage />
        <LoginPage />
        <MenuNavigation />

        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/statistics" element={<TableList />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;
