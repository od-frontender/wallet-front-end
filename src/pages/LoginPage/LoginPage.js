import LoginForm from '../../components/LoginForm';
import Login from '../../components/Login/';

import s from './LoginPage.module.scss';
import Background from '../../components/Background/Background';
import Blur from '../../components/Blur/Blur';

const LoginPage = () => {
  return (
    <Background>
      <div className={s.loginPage_wrapper}>
        <div className={s.loginPage_image}>
          <Login />
        </div>
        <div className={s.loginPage_form}>
          <Blur>
            <LoginForm />
          </Blur>
        </div>
      </div>
    </Background>
  );
};

export default LoginPage;
