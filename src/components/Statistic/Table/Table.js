import React from 'react';
import s from './Table.module.scss';

export const Table = props => {
  return (
    <div className={s.DivTable}>
      <thead className={s.TableCtgr}>
        <tr className={s.TablePad}>
          <div className={s.CvadrCtgr}></div>
          <th>{props.post.category}</th>
          <th className={s.PadCtgr}>{props.post.sum}</th>
        </tr>
        <hr className={s.LineCtgr}></hr>
      </thead>
    </div>
  );
};

export default Table;
