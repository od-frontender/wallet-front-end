
import MainView from './views/MainView';
import './styles/index.scss';

import Currency from './components/Currency';
import AppBar from "./components/AppBar/AppBar";
// import { useSelector } from "react-redux";
 // import { authSelectors } from "../../redux/auth";
function App() {
   // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true;
  return <>
    {isLoggedIn && <AppBar />}
     <MainView />
    <Currency />
  </>;

}
export default App;
