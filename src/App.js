import { Routes, Route } from 'react-router';
import MainView from './views/MainView';
import './styles/index.scss';
import AppBar from './components/AppBar/AppBar';

import Currency from './components/Currency';
import CategoryList from './components/Statistic/Category/CategoryList';
import TableList from './components/Statistic/Table/TableList';
import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import Container from './components/Container/Container';

function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true;
  return (
    <>
      <Container>
        {isLoggedIn && <AppBar />}
        <MenuNavigation />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/statistics" element={<CategoryList />} />
          {/* <Route path="/statistics" element={<TableList />} /> */}
        </Routes>
        {/* <TableList /> */}
      </Container>
    </>
  );
}
export default App;
