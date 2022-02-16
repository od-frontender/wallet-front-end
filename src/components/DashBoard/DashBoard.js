import { Routes, Route } from 'react-router';
import Media from 'react-media';
import MainView from '../../views/MainView';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import Currency from '../Currency';
import TableList from '../Statistic/Table/TableList';

export default function DashBoard() {
  return (
    <Media query="(max-width: 768px)">
      {matches =>
        matches ? (
          <>
            <MenuNavigation />
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/statistics" element={<TableList />} />
              <Route path="/currency" element={<Currency />} />
            </Routes>
          </>
        ) : (
          <>
            <MenuNavigation />
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/statistics" element={<TableList />} />
            </Routes>
          </>
        )
      }
    </Media>
  );
}
