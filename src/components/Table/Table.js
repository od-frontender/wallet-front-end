// import { useTable } from 'react-table';
import Container from '../Container/Container';
import TableItem from './TableItem';
const headerArr = ['Data', 'Type', 'Category', 'Comment', 'Sum', 'Balance'];
export default function Table() {
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
                    </th>
                  );
                })}
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
