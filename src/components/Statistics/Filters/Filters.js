import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import s from '../Filters/Filters.module.scss'
import * as operations from '../../../redux/statistics/statistics-operations';

const Filters = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    dispatch(operations.fetchStatistics({ month, year }));
  }, [dispatch, month, year]);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const onChangeMonth = event => {
    setMonth(event.target.value);
  };
  const onChangeYear = event => {
    setYear(event.target.value);
  };

  return (
    <><div className={s.filt_flex}>
       <FormControl>
        <Select
          sx={{
            width: 200,
            margin: '0 auto',
            height: 50,
            border: '1px solid #000000',
            borderRadius: '30px',
            fontFamily: 'Circe',
            fontSize: '16px',
            lineHeight: '24px',
            paddingLeft: '5px',
          }}
          value={month}
          onChange={onChangeMonth}
          inputProps={{ 'aria-label': 'Without label' }}
          displayEmpty
          renderValue={value => {
            console.log('value :>> ', value);
            return value !== '' ? months[value] : 'Month';
          }}
        >
          <MenuItem
            disabled
            value=""
            sx={{
              height: 50,
              borderRadius: '30px',
              fontFamily: 'Circe',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            Month
          </MenuItem>
          {months.map((mon, index) => (
            <MenuItem
              key={index}
              value={index}
              sx={{
                height: 50,
                borderRadius: '30px',
                fontFamily: 'Circe',
                fontSize: '16px',
                lineHeight: '24px',
              }}
            >
              {mon}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <Select
          sx={{
            width: 200,
            margin: '0 auto',
            height: 50,
            border: '1px solid #000000',
            borderRadius: '30px',
            fontFamily: 'Circe',
            fontSize: '16px',
            lineHeight: '24px',
          paddingLeft: '5px',
          }}
          value={year}
          onChange={onChangeYear}
          inputProps={{ 'aria-label': 'Without label' }}
          displayEmpty
          renderValue={value => {
            console.log('value :>> ', value);
            return value !== '' ? value : 'Year';
          }}
        >
          <MenuItem
            disabled
            value=""
            sx={{
              height: 50,
              borderRadius: '30px',
              fontFamily: 'Circe',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            Year
          </MenuItem>
          <MenuItem
            value={2022}
            sx={{
              height: 50,
              borderRadius: '30px',
              fontFamily: 'Circe',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            2022
          </MenuItem>
        </Select>
      </FormControl>
    </div>
     
    </>
  );
};

export default Filters;
