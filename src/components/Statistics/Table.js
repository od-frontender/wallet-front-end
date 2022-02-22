import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Category } from 'react-chartjs-2';
import { getEntities } from '../../redux/statistics/statistics-selectors';
import s from './Table.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

 const Table = () => {
  const categoriesStats = useSelector(getEntities);

 
 
 
  console.log(categoriesStats)
      return (
  <li>
{categoriesStats.map(item => 
  <><span >{item.category}</span>
  <span className={s.PadCtgr}>{item.total}</span>
  <hr/></>
   
)

 }

  </li>
    );
};
export default Table;