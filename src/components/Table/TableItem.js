import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTransactions } from '../../redux/table/table-operations';
import { getTransactions } from '../../redux/table/table-selectors';

export default function TableItem() {
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  });
  return (
    <>
      {transactions.map(({ id, data, type, category, comment, sum }) => {
        return (
          <tr key={id} className="table__data-row">
            <td className="table__item">{data}</td>
            <td className="table__item">{type}</td>
            <td className="table__item">{category}</td>
            <td className="table__item">{comment}</td>
            <td
              className={
                type === '-'
                  ? 'table__item--spending table__item'
                  : 'table__item--income table__item'
              }
            >
              {sum}
            </td>
            <td className="table__item">balance</td>
          </tr>
        );
      })}
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
