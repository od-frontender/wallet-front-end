import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';
import fetchCurrency from '../../assets/API/fetchCurrency';

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
    <>
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Валюта</TableCell>
                <TableCell>Покупка</TableCell>
                <TableCell>Продажа</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currency.map(el => (
                <TableRow key={el.ccy}>
                  <TableCell>{el.ccy}</TableCell>
                  <TableCell>{Math.floor(el.buy * 100) / 100}</TableCell>
                  <TableCell>{Math.floor(el.sale * 100) / 100}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
