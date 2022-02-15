import { useEffect, useState } from 'react';

import fetchCurrency from '../../assets/API/fetchCurrency';

import s from './Currency.module.css';


export default function Currency() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchCurrency();
        setCurrency(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div className={s.currency_container}>
      <table className={s.currency_table}>
        <thead >
          <tr className={s.currency_row}>
            <th className={s.currency_colmn}>Currency</th>
            <th className={s.currency_colmn}>Buy</th>
            <th className={s.currency_colmn}>Sale</th>
          </tr>
        </thead>

        <tbody className={s.currency_tbody}>
          {currency.map(({ ccy, buy, sale }) => (
            <tr key={buy}>
              <td>{ccy}</td>
              <td>{Number(buy).toFixed(2)}</td>
              <td>{Number(sale).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
