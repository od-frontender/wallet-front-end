import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import * as asctions from '../../redux/transactionsTable/transactions-actions';
import {
  getFiltredValue,
  getVisibleTransatcions,
} from '../../redux/transactionsTable/transactions-selectors';
import st from './styles/Table.module.scss';
import btn from './styles/Buttons.module.scss';

export function HeaderEl(el, options, handleChange, selectedOption) {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFiltredValue);

  return (
    <th className={st.table__header} key={el}>
      {el}
      {el !== 'Category' && el !== 'Comment' ? (
        <Select
          defaultValue={filterValue}
          options={options}
          onChange={e => dispatch(asctions.filtredTransactions(e.value))}
          name="select"
          className={btn.table__buttons}
        ></Select>
      ) : null}
    </th>
  );
}
