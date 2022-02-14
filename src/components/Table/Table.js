import { useSelector, useDispatch } from 'react-redux';
// import Container from '../Container/Container';
import TableItem from './TableItem';
const headerArr = [
  'Data',
  'Type',
  'Category',
  'Comment',
  'Sum',
  'Balance',
  // 'Delete',
];

export default function Table() {
  const dispatch = useDispatch();

  return (
    <>
      <section className="table__section">
        <div className="table__container">
          <table className="table">
            <thead className="table__head">
              <tr className="table__header--row">
                {headerArr.map(el => {
                  return (
                    <th className="table__header" key={el}>
                      {el}
                      {/* <select
                        defaultValue="value1"
                        name="select"
                        className="table__buttons"
                      >
                        <option value="value1">Значение 1</option>
                        <option value="value2" selected>
                          Значение 2
                        </option>
                      </select> */}
                    </th>
                  );
                })}
                <th className="table__header">Delete</th>
              </tr>
            </thead>

            <tbody className="table__body">
              <TableItem />
            </tbody>
          </table>

          {/* <table className="table__list"></table> */}
        </div>
      </section>
    </>
  );
}
