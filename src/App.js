import MainView from './views/MainView';
import './styles/index.scss';
import AppBar from './components/AppBar/AppBar';

import Currency from './components/Currency';
import CategoryList from './components/Statistic/Category/CategoryList';
import TableList from './components/Statistic/Table/TableList';
import RegisterPage from './pages/RegisterPage/';
import LoginPage from './pages/LoginPage';

function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn && <AppBar />}
      <RegisterPage />
      <LoginPage />
      <MainView />
      <Currency />
      <CategoryList />
      <TableList />
    </>
  );
}
export default App;
