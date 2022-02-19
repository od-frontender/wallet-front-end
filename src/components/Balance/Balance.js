import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBalance } from '../../redux/transactionsTable/transactions-selectors';
import st from './Balance.module.scss';

export default function Balance() {
  const dispatch = useDispatch();
  const totalbalance = useSelector(getBalance);

  useEffect(() => {
    // dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <div className={st.balance__container}>
      <div className={st.balance__box}>
        <p className={st.balance__text}>Your balance</p>
        <p className={st.balance__number}>
          &#8372;&nbsp; 25000
          {/* {totalbalance} */}
        </p>
      </div>
    </div>
  );
}
