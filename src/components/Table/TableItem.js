import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTransactions } from '../../redux/table/table-operations';
import { getTransactions } from '../../redux/table/table-selectors';
import deletingImg from '../../images/trash_violet.png';

export default function TableItem() {
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactions);
  const removeImg = deletingImg;
  // console.log('transactions selector', transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  return (
    <>
      {
        // transactions.length > 0 ?
        transactions.map(
          ({ _id, createdAt, month, type, category, comment, sum, total }) => {
            return (
              // <tbody className="table__body">
              <tr key={_id} className="table__data-row">
                <td className="table__item">{month}</td>
                <td className="table__item">{type === true ? '+' : '-'}</td>
                <td className="table__item">{category}</td>
                <td className="table__item">{comment}</td>
                <td
                  className={
                    type === true
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

// const data = [
//   {
//     id: 1,
//     data: '04.01.19',
//     type: '-',
//     category: 'car',
//     comment: 'oil',
//     sum: '1000.00',
//   },
//   {
//     id: 21,
//     data: '05.01.19',
//     type: '+',
//     category: 'products',
//     comment: 'vegetables',
//     sum: '250.00',
//   },
//   {
//     id: 23,
//     data: '09.01.19',
//     type: '-',
//     category: 'car',
//     comment: 'STO',
//     sum: '2508.00',
//   },
//   {
//     id: 22,
//     data: '06.01.19',
//     type: '+',
//     category: 'products',
//     comment: 'vegetables',
//     sum: '250.00',
//   },
//   {
//     id: 239,
//     data: '06.01.19',
//     type: '-',
//     category: 'products',
//     comment: 'vegetables',
//     sum: '250.00',
//   },
// ];
