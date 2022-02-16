import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import dateFormat from 'dateformat';

import { fetchTransactions } from '../../redux/transactionsTable/transactions-operations';
import { getTransactions } from '../../redux/transactionsTable/transactions-selectors';
import deletingImg from '../../images/trash_violet.png';

export default function TableItem() {
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactions);
  const removeImg = deletingImg;

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  return (
    <>
      {
        // transactions.length > 0 ?
        transactions.map(
          ({ _id, createdAt, type, category, comment, sum, total }) => {
            return (
              <tr key={_id} className="table__data-row">
                <td className="table__item">
                  {dateFormat(createdAt, 'mm.dd.yy')}
                </td>
                <td className="table__item">{type ? '+' : '-'}</td>
                <td className="table__item">{category}</td>
                <td className="table__item">{comment}</td>
                <td
                  className={
                    type
                      ? 'table__item--income table__item'
                      : 'table__item--spending table__item'
                  }
                >
                  {sum}
                </td>
                <td className="table__item">{total}</td>
                <td className="table__item">
                  <button className="button__remove">
                    <img className="remove-img" src={removeImg} alt="" />
                  </button>
                </td>
              </tr>
            );
          },
        )
        // : null
      }
    </>
  );
}
