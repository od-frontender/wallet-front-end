import { useSelector, useDispatch } from 'react-redux';
import { getBalance } from '../../redux/table/table-selectors';

export default function Balance() {
  const totalbalance = useSelector(getBalance);
  return (
    <div className="balance__box">
      <p className="balance__text">Your balance</p>
      <p className="balance__number">&#8372;&nbsp;{totalbalance}</p>
    </div>
  );
}
