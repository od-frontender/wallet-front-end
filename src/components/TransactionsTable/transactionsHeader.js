import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { filtredTransactions } from '../../redux/transactionsTable/transactions-actions';
import {
  getFiltredValue,
  getVisibleTransatcions,
} from '../../redux/transactionsTable/transactions-selectors';

export function HeaderEl(el, options, handleChange, selectedOption) {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFiltredValue);

  return (
    <th className="table__header" key={el}>
      {el}
      {el !== 'Category' && el !== 'Comment' ? (
        <Select
          defaultValue={filterValue}
          options={options}
          onChange={e => dispatch(filtredTransactions(e.value))}
          name="select"
          className="table__buttons"
        ></Select>
      ) : null}
    </th>
  );
}
