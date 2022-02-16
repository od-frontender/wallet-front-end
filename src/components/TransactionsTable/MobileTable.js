import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import dateFormat from 'dateformat';

import s from './MobileTable.module.scss';
import Balance from '../Balance/Balance';
import { getTransactions } from '../../redux/transactionsTable/transactions-selectors';
import { fetchTransactions } from '../../redux/transactionsTable/transactions-operations';
//

export default function MobileTable() {
  const transactions = useSelector(getTransactions);

  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchTransactions());
  //   }, [dispatch]);
  return (
    <>
      {/* <Balance /> */}
      <section className={s.table__section}>
        <div className={s.table__container}>
          {transactions.length > 0
            ? transactions.map(
                ({ _id, createdAt, type, category, comment, sum, total }) => {
                  return (
                    <ul className={s.table__card}>
                      <li key={_id} className={s.table__item}>
                        <p>Data</p>
                        <p>{dateFormat(createdAt, 'mm.dd.yy')}</p>
                      </li>

                      <li key={createdAt} className={s.table__item}>
                        <p>Type</p>
                        <p>{type ? '+' : '-'}</p>
                      </li>
                      <li key={nanoid()} className={s.table__item}>
                        <p>Category</p>
                        <p>{category}</p>
                      </li>
                      <li key={nanoid()} className={s.table__item}>
                        <p>Comment</p>
                        <p>{comment}</p>
                      </li>
                      <li key={nanoid()} className={s.table__item}>
                        <p>Sum</p>
                        <p>{sum}</p>
                      </li>
                      <li key={nanoid()} className={s.table__item}>
                        <p>Balance</p>
                        <p>{total}</p>
                      </li>
                      <li key={nanoid()} className={s.table__item}>
                        <p>Delete</p>
                      </li>
                    </ul>
                  );
                },
              )
            : 'Loading...'}
        </div>
      </section>
    </>
  );
}
