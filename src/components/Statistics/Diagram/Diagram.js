import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getEntities } from '../../../redux/statistics/statistics-selectors';
import s from './Diagram.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const Diagram = () => {
  const categoriesStats = useSelector(getEntities);

  const data = {
    datasets: [
      {
        label: 'Total spending',
        data: categoriesStats.map(item => item.total),
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#FF6596',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  return (
    <div className={s.chart_container}>
      <Doughnut data={data} />
      <span className={s.chart_inner_text}>
        ₴{' '}
        {categoriesStats
          .reduce((acc, obj) => {
            return acc + obj.total;
          }, 0)
          .toFixed(2)}
      </span>
    </div>
  );
};

export default Diagram;
