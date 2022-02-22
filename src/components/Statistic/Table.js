import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getEntities } from '../../redux/statistics/statistics-selectors';
import s from './Table.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

 const Table = () => {
  const categoriesStats = useSelector(getEntities);

  const data = {
    datasets: [
      {
        label: 'Total spending',
        data: categoriesStats.map(item => item.total)
      },
    ],
  };

  return (
  <li>

<Doughnut data={data}/>
{categoriesStats
          .reduce((acc, obj) => {
            return acc + obj.total;
          }, 0)
          .toFixed(2)}
  </li>
    );
};
export default Table;