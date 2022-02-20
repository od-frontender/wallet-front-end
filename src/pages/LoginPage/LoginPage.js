import LoginForm from '../../components/LoginForm';
import Login from '../../components/Login/';

import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={s.loginPage_wrapper}>
      <Login />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
