import Icons from '../../images/sprite.svg';

import s from './Register.module.scss';

const Register = () => {
  return (
    <>
      <div className={s.register_wrapper}>
        <svg width="452" height="412" className={s.svg}>
          <use xlinkHref={`${Icons}#icon-girl`} />
        </svg>
        <h1 className={s.tittle}>Finance App</h1>
      </div>
    </>
  );
};

export default Register;
