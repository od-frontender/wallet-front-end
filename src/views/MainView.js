import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Media from 'react-media';
import Table from '../components/TransactionsTable/Table';
import Balance from '../components/Balance/Balance';
import { fetchTransactions } from '../redux/transactionsTable/transactions-operations';
import Currency from '../components/Currency';

export default function MainView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <Media query="(max-width: 768px)">
        {matches =>
          matches ? (
            <>
              {/* <Currency /> */}
              <Balance />
              <Table />
            </>
          ) : (
            <>
              <Currency />
              <Balance />
              <Table />
            </>
          )
        }
      </Media>
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
