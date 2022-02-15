import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from '../components/TransactionsTable/Table';
import Balance from '../components/Balance/Balance';
import { fetchTransactions } from '../redux/transactionsTable/transactions-operations';

export default function MainView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <Balance />
      <Table />
    </>
  );
}

//    {/* {table.length > 0 ? (
//         <>
//           <Table />
//         </>
//       ) : (
//         <p className="section__title">Loading...</p>
//       )} */}
