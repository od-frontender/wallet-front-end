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
        <><div className={s.DivTbl}>
          <span className={s.PadTbl}>Категория</span>
          <span className={s.PadTable}>Сумма</span>
        </div>
<li className={s.TableItem}>
          {categoriesStats.map(item => <><span className={s.FontCtgr}>{item.category}</span>
            <span className={s.PadCtgr}> <p className={s.FontCtgr}>{item.total}</p></span><hr className={s.LineTbl} /></>

            )}

          </li></>
        
        
    );
};
export default Table;