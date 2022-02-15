import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBalance } from '../../redux/transactionsTable/transactions-selectors';
// import { fetchBalance } from '../../redux/table/table-operations';

export default function Balance() {
  const dispatch = useDispatch();
  const totalbalance = useSelector(getBalance);

  useEffect(() => {
    // dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <div className="balance__box">
      <p className="balance__text">Your balance</p>
      <p className="balance__number">&#8372;&nbsp;{totalbalance}</p>
    </div>
  );
}
