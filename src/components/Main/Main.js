import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Media from 'react-media';
import Table from '../TransactionsTable/Table';
import Balance from '../Balance/Balance';
import { fetchTransactions } from '../../redux/transactionsTable/transactions-operations';
import Currency from '../Currency';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import StatisticsDiagram from '../StatisticsDiagram/StatisticsDiagram';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <Media query="(max-width: 767px)">
        {matches =>
          matches ? (
            <>
              <MenuNavigation />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Balance />
                      <Table />
                    </>
                  }
                />
                <Route path="/statistics" element={<StatisticsDiagram />} />
                <Route path="/currency" element={<Currency />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </>
          ) : (
            <>
              <MenuNavigation />
              <Currency />
              <Balance />
              <Routes>
                <Route path="/" element={<Table />} />
                <Route path="/statistics" element={<StatisticsDiagram />} />
                <Route
                  path="/currency"
                  element={<Navigate to="/dashboard" />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </>
          )
        }
      </Media>
    </>
  );
}
