// import Currency from './components/Currency/Currency';
import { Routes, Route } from 'react-router';
import Container from './components/Container/Container';
import Currency from './components/Currency/Currency';
import MenuNavigation from './components/MenuNavigation/MenuNavigation';

import './styles/index.scss';
function App() {
  return (
    <Container>
      <MenuNavigation />
      <Routes>
        <Route path="/currency" element={<Currency />} />
      </Routes>
    </Container>
  );
}
export default App;
