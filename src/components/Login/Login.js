import Icons from '../../images/sprite.svg';

import s from './Login.module.scss';

const Login = () => {
  return (
    <>
      <div className={s.login_wrapper}>
        <svg className={s.svg}>
          <use xlinkHref={`${Icons}#icon-boy`} />
        </svg>
        <h1 className={s.tittle}>Finance App</h1>
      </div>
    </>
  );
};

export default Login;
