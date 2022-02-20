import React from 'react';
import s from './Table.module.scss'

export const Table = (props)=>{
    return(
        <li key={props.post.id} className={s.DivTable}>





        
        <span className={s.PadCat}>{props.post.category}</span>
        <span className={s.PadCtgr}>{props.post.sum}</span>






        <hr className={s.LineCtgr}></hr>

      </li>
    )
}

export default Table;