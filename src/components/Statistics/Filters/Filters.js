import React from 'react';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import * as operations from '../../redux/statistics/statistics-operations';

import s from './Filters.module.scss';

const Filters = () => {
  const [month, setMonth] = useState(null);
  //   const dispatch = useDispatch();
  //   useEffect(() => dispatch(operations.fetchStatistics()), [dispatch]);
  //     const onChooseMonth = () => {
  //     set
  // }
  return (
    <div className={s.form}>
      <ul className={s.select}>
        <li>
          <input
            className={s.select_close}
            type="radio"
            name="month"
            id="month"
            value=""
          />
          {month ? (
            <></>
          ) : (
            <span className={`${s.select_label} ${s.select_label_placeholder}`}>
              Month
            </span>
          )}
        </li>

        <li className={s.select_items}>
          <input
            className={s.select_expand}
            type="radio"
            name="month"
            id="month-opener"
          />
          <label className={s.select_closeLabel} htmlFor="month-close"></label>

          <ul
            className={s.select_options}
            onClick={e => setMonth(Number(e.target.id))}
          >
            <li className={s.select_option}>
              <input
                className={s.select_input}
                type="radio"
                name="month"
                id="0"
              />
              <label className={s.select_label} htmlFor="0">
                ridiculous
              </label>
            </li>

            <li className={s.select_option}>
              <input
                className={s.select_input}
                type="radio"
                name="month"
                id="1"
              />
              <label className={s.select_label} htmlFor="1">
                reasonable
              </label>
            </li>

            <li className={s.select_option}>
              <input
                className={s.select_input}
                type="radio"
                name="month"
                id="2"
              />
              <label className={s.select_label} htmlFor="2">
                lacking
              </label>
            </li>

            <li className={s.select_option}>
              <input
                className={s.select_input}
                type="radio"
                name="month"
                id="3"
              />
              <label className={s.select_label} htmlFor="3">
                awesomeless
              </label>
            </li>
          </ul>

          <label
            className={s.select_expandLabel}
            htmlFor="month-opener"
          ></label>
        </li>
      </ul>
    </div>
    // <div className={s.filters}>
    //   <span className={s.select}>Month</span>
    //   <ul>
    //     <li value="0" className={s.option}>
    //       <label for="jan">January</label>
    //     </li>
    //     <li value="1" className={s.option}>
    //       <label for="feb">February</label>
    //     </li>
    //     <li value="2" className={s.option}>
    //       <label for="mar">March</label>
    //     </li>
    //     <li value="3" className={s.option}>
    //       <label for="apr">April</label>
    //     </li>
    //     <li value="4" className={s.option}>
    //       <label for="feb">May</label>
    //     </li>
    //     <li value="5" className={s.option}>
    //       <label for="feb">June</label>
    //     </li>
    //     <li value="6" className={s.option}>
    //       <label for="feb">July</label>
    //     </li>
    //     <li value="7" className={s.option}>
    //       <label for="feb">August</label>
    //     </li>
    //     <li value="8" className={s.option}>
    //       <label for="feb">September</label>
    //     </li>
    //     <li value="9" className={s.option}>
    //       <label for="feb">October</label>
    //     </li>
    //     <li value="10" className={s.option}>
    //       <label for="feb">November</label>
    //     </li>
    //     <li value="11" className={s.option}>
    //       <label for="feb">December</label>
    //     </li>
    //   </ul>
    //   <summary className={s.radios}>
    //     <input type="radio" name="month" id="jan" title="0"></input>
    //     <input type="radio" name="month" id="feb" title="1"></input>
    //     <input type="radio" name="month" id="mar" title="2"></input>
    //     <input type="radio" name="month" id="apr" title="3"></input>
    //     <input type="radio" name="month" id="may" title="4"></input>
    //     <input type="radio" name="month" id="jun" title="5"></input>
    //     <input type="radio" name="month" id="jul" title="6"></input>
    //     <input type="radio" name="month" id="aug" title="7"></input>
    //     <input type="radio" name="month" id="sep" title="8"></input>
    //     <input type="radio" name="month" id="oct" title="9"></input>
    //     <input type="radio" name="month" id="nov" title="10"></input>
    //     <input type="radio" name="month" id="dec" title="11"></input>
    //   </summary>
    // </div>
  );
};

export default Filters;
