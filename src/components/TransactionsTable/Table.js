import { useSelector, useDispatch } from 'react-redux';
import { useState, React } from 'react';

import { HeaderEl } from './transactionsHeader';
import TableItem from './TableItem';
import headerData from './headerData';
import MobileTable from './MobileTable';

export default function Table() {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState({
    value: '',
    label: '',
  });
  const handleChange = value => {
    setSelectedOption({ value: value, label: value });
  };

  return (
    <>
      {/* <section className="table__section">
        <div className="table__container">
          <table className="table">
            <thead className="table__head">
              <tr className="table__header--row">
                {headerData.map(({ name, options }) => {
                  return HeaderEl(name, options, handleChange, selectedOption);
                })}
                <th className="table__header">Delete</th>
              </tr>
            </thead>

            <tbody className="table__body">
              <TableItem />
            </tbody>
          </table>
        </div>
      </section> */}
      {/* mobile */}
      <MobileTable />
    </>
  );
}
