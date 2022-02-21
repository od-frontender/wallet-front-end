import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  getEntities,
  //   getLoadingStats,
} from '../../redux/statistics/statistics-selectors';
import * as operations from '../../redux/statistics/statistics-operations';
import s from './StatisticsDiagram.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticsDiagram = () => {
  const categoriesStats = useSelector(getEntities);
  //   const isLoading = useSelector(getLoadingStats);
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchStatistics()), [dispatch]);
  //   const colorsArr = [
  //     '#FED057',
  //     '#FFD8D0',
  //     '#FD9498',
  //     '#FF6596',
  //     '#C5BAFF',
  //     '#6E78E8',
  //     '#4A56E2',
  //     '#81E1FF',
  //     '#24CCA7',
  //     '#00AD84',
  //   ];
  //   const categoriesStats = [
  //     {
  //       category: 'basic',
  //       total: 100,
  //     },
  //     {
  //       category: 'products',
  //       total: 200,
  //     },
  //     {
  //       category: 'restaurant',
  //       total: 300,
  //     },
  //     {
  //       category: 'auto',
  //       total: 400,
  //     },
  //     {
  //       category: 'house',
  //       total: 500,
  //     },
  //     {
  //       category: 'development',
  //       total: 600,
  //     },
  //     {
  //       category: 'rest',
  //       total: 700,
  //     },
  //     {
  //       category: 'children',
  //       total: 800,
  //     },
  //     {
  //       category: 'animals',
  //       total: 900,
  //     },
  //     {
  //       category: 'other',
  //       total: 1000,
  //     },
  //   ];
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

export default StatisticsDiagram;
