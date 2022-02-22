import React from 'react';
import s from './Table.module.scss';


function TableItem(){
return(
  
    <div className={s.DivTbl}>
        <span className={s.PadTbl}>Категория</span>
        <span className={s.PadTable}>Сумма</span>
    </div>
)
}

export default TableItem;