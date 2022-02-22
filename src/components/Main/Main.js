import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Media from 'react-media';
import Table from '../TransactionsTable/Table';
import Balance from '../Balance/Balance';
import TransactionForm from '../TransactionForm/TransactionForm';
import { fetchTransactions } from '../../redux/transactionsTable/transactions-operations';
import Currency from '../Currency';
import MenuNavigation from '../MenuNavigation/MenuNavigation';

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
              <Balance />
              <Table />
              {/* <BtnIcon /> */}
              <TransactionForm />
            </>
          ) : (
            <section>
              <MenuNavigation />
              <Currency />
              <Balance />
              <Table />
              {/* <BtnIcon /> */}
              <TransactionForm />
            </section>
          )
        }
      </Media>
    </>
  );
}
