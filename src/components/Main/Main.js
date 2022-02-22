import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Media from 'react-media';
import Table from '../TransactionsTable/Table';
import Balance from '../Balance/Balance';
import { fetchTransactions } from '../../redux/transactionsTable/transactions-operations';
import Currency from '../Currency';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import Statistics from '../Statistics/Statistics';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

import s from './Main.module.scss';

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
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/currency" element={<Currency />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </>
          ) : (
            <div className={s.mainPage}>
              <div className={s.general}>
                <div className={s.nav_and_balance}>
                  <MenuNavigation />
                  <Balance />
                </div>
                <Currency />
              </div>
              <div className={s.divider}></div>
              <Routes>
                <Route path="/" element={<Table />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route
                  path="/currency"
                  element={<Navigate to="/dashboard" />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          )
        }
      </Media>
    </>
  );
}
