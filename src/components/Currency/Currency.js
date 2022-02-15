import { useEffect, useState } from 'react';

import fetchCurrency from '../../assets/API/fetchCurrency';
import Spinner from '../Spinner';

import s from './Currency.module.css';


export default function Currency() {
  const [currency, setCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCurrency();
        data.length = 3;
        setCurrency(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (

    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <table className={s.table}>
            <thead className={s.table_label_container}>
              <tr className={s.table_label_row}>
                <th className={s.table_label_column}>Currency</th>
                <th className={s.table_label_column}>Buy</th>
                <th className={s.table_label_column}>Sale</th>
              </tr>
            </thead>
            <tbody className={s.table_tbody}>
              {currency.map(({ ccy, buy, sale }) => (
                <tr key={buy} className={s.table_tbody_row}>
                  <td className={s.table_tbody_column}>{ccy}</td>
                  <td className={s.table_tbody_column}>
                    {Number(buy).toFixed(2)}
                  </td>
                  <td className={s.table_tbody_column}>
                    {Number(sale).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>

  );
}
