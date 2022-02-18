import { useSelector, useDispatch } from 'react-redux';
import { useState, React } from 'react';

import { HeaderEl } from './HeaderEl';
import TableItem from './TableItem';
import headerData from './headerData';
import MobileTable from './MobileTable';
import s from './styles/Table.module.scss';

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
      <section className={s.table__section}>
        <div className={s.table__container}>
          <table className={s.table}>
            <thead className={s.table__head}>
              <tr className={s.table__header}>
                {headerData.map(({ name, options }) => {
                  return HeaderEl(name, options, handleChange, selectedOption);
                })}
                <th className={s.table__header}>Delete</th>
              </tr>
            </thead>

            <tbody className={s.table__body}>
              <TableItem />
            </tbody>
          </table>
        </div>
      </section>

      {/* <MobileTable /> */}
    </>
  );
}
