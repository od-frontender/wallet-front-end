// import { useSelector, useDispatch } from 'react-redux'
// import coloriseName from '../../functionsService/colorFunction'
// import toAbbreviate from '../../functionsService/abbreviation'
// import { operations, selectors } from '../../redux/todos'
const data = [
  {
    id: 1,
    data: '04.01.19',
    type: '-',
    category: 'car',
    comment: 'oil',
    sum: '1000.00',
  },
  {
    id: 21,
    data: '05.01.19',
    type: '+',
    category: 'products',
    comment: 'vegetables',
    sum: '250.00',
  },
  {
    id: 22,
    data: '05.01.19',
    type: '+',
    category: 'products',
    comment: 'vegetables',
    sum: '250.00',
  },
  {
    id: 23,
    data: '05.01.19',
    type: '-',
    category: 'products',
    comment: 'vegetables',
    sum: '250.00',
  },
];

export default function TableItem() {
  return (
    <>
      {data.map(({ id, data, type, category, comment, sum }) => {
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
// {/* <td>{balance}</td> */}
// export default function TodoItem() {
//   const dispatch = useDispatch()
//   const todos = useSelector(selectors.getTodos)
//   const users = useSelector(selectors.getUsers)
//   const onToggleCompleted = ({ id, condition }) => {
//     dispatch(operations.toggleCompleted({ id, condition }))
//   }

//   return (
//     <>
//       {todos.map((todo) => {
//         const { id, userId, title, condition } = todo
//         return (
//           <li key={id} className="tickets__item">
//             <div className="tickets__box">
//               <p
//                 className="tickets__user-label"
//                 style={{
//                   backgroundColor: coloriseName(userId),
//                   borderRadius: 50,
//                   padding: 24,
//                 }}
//               >
//                 {users &&
//                   users.map(({ id, name }) =>
//                     id === userId ? toAbbreviate(name) : null
//                   )}
//               </p>
//               <p className="tickets__title">{title}</p>
//             </div>
//             <p
//               className="tickets__completed"
//               onClick={() => {
//                 return onToggleCompleted({ id, condition })
//               }}
//             >
//               {condition}
//             </p>
//           </li>
//         )
//       })}
//     </>
//   )
// }
