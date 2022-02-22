import axios from 'axios';

export async function fetchStatisticsAPI() {
  const { data } = await axios.get('transactions/stats');
  return data;
}