import axios from 'axios';

export async function fetchStatisticsAPI(month, year) {
  const params = {
    month: month && new Date(Date.now()).getMonth(),
    year: year && new Date(Date.now()).getFullYear(),
  };
  const { data } = await axios.get('transactions/stats', { params });
  return data;
}
