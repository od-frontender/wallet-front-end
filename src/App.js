import MainView from './views/MainView';
import './styles/index.scss';
import AppBar from './components/AppBar/AppBar';

import Currency from './components/Currency';
import CategoryList from './components/Statistic/Category/CategoryList';
import TableList from './components/Statistic/Table/TableList';

function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn && <AppBar />}
      <MainView />
      <Currency />
      <CategoryList />
      <TableList />
    </>
  );
}
export default App;
