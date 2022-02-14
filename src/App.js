// import Currency from './components/Currency/Currency';
import { Routes, Route } from 'react-router';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Currency from './components/Currency/Currency';

import './styles/index.scss';
function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/currency" element={<Currency />} />
      </Routes>
    </Container>
  );
}
export default App;
