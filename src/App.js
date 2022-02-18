import { Routes, Route } from 'react-router';
import MainView from './views/MainView';
import './styles/index.scss';
import AppBar from './components/AppBar/AppBar';

import Currency from './components/Currency';
import TableList from './components/Statistic/Table/TableList';
import MenuNavigation from './components/MenuNavigation/MenuNavigation';
import Container from './components/Container/Container';
import NotFoundView from './components/NotFoundView/NotFoundView';

// import BtnAddTransaction from '../../components/BtnAddTransaction';
import BtnIcon from './components/BtnAddTransaction/BtnIcon/BtnIcon';
import TransactionForm from './components/TransactionForm/TransactionForm';
// import { HiX } from 'react-icons/hi';

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
          <Route path="/statistics" element={<TableList />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>

        
        <BtnIcon>+</BtnIcon>
        <TransactionForm></TransactionForm>

       {/* <Button
            // onClick={onOpenModal}
            // aria-label="Open modal"
            // btnClass="ButtonIconAdd"
          >
            +
          </Button> */}
        {/* {showModal && (
          <BtnAddTransaction onClose={toggleModal}>
            <TransactionForm onClose={toggleModal} />
            {sizeScreen > 767 && (
              <Button
                btnClass="ButtonIconClose"
                onClick={toggleModal}
                aria-label="Close modal">
                <HiX />
              </Button>
            )}
          </BtnAddTransaction>)} */}
      </Container>  
    </>
  );
}
export default App;
