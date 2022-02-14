import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from '../components/Table';
import Balance from '../components/Table/Balance';
import { fetchTransactions } from '../redux/table/table-operations';

export default function TableView() {
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
