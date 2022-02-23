import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../../redux/statistics/statistics-operations';
import Diagram from './Diagram/Diagram';
import Filters from './Filters/Filters';
import s from './Statistics.module.scss';

const Statistics = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchStatistics('', '')), [dispatch]);

  return (
    <div className={s.stat}>
      <span className={s.stat_text}>Statistics</span>
      <div className={s.diagram}>
        <Diagram />
      </div>
      <div className={s.stat_table}>
        <Filters />
      </div>
    </div>
  );
};

export default Statistics;
