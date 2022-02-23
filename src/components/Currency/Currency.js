import { useEffect, useState } from 'react';

import s from './Currency.module.scss';

export default function Currency() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
      .then(response => response.json())
      .then(response => setCurrency(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className={s.currency_wrapper}>
        <table className={s.table}>
          <thead className={s.table_label_container}>
            <tr className={s.table_label_row}>
              <th className={s.table_label_column}>Currency</th>
              <th className={s.table_label_column}>Buy</th>
              <th className={s.table_label_column}>Sale</th>
            </tr>
          </thead>
          <tbody className={s.table_tbody}>
            {currency
              .map(({ ccy, buy, sale }) => (
                <tr key={buy} className={s.table_tbody_row}>
                  <td className={s.table_tbody_column}>{ccy}</td>
                  <td className={s.table_tbody_column}>
                    {Number(buy).toFixed(2)}
                  </td>
                  <td className={s.table_tbody_column}>
                    {Number(sale).toFixed(2)}
                  </td>
                </tr>
              ))
              .splice(0, 3)}
          </tbody>
        </table>
      </div>
    </>
  );
}
