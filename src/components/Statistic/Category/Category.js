import React from 'react'
import { ReactComponent as IconMenu } from '../../../images/Vector.svg'
import s from './Category.module.scss';


export const Category = (props) => {

  return (
    <button className={s.BtnDate}>
      <span className={s.BtnString}>{props.post.title}</span>
      <IconMenu className={s.BtnArrow}  />
    </button>
  )
}

export default Category;
