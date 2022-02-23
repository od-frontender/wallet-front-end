import axios from 'axios';

export async function fetchStatisticsAPI(month, year) {
  const params = {
    month: month === '' ? new Date(Date.now()).getMonth() : month,
    year: year === '' ? new Date(Date.now()).getFullYear() : year,
  };
  const { data } = await axios.get('transactions/stats', { params });
  return data;
}
