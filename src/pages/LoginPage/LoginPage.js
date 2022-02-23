import LoginForm from '../../components/LoginForm';
import Login from '../../components/Login/';
import Media from 'react-media';
import Background from '../../components/Background/Background';
import Blur from '../../components/Blur/Blur';

import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <div className={s.loginPage_wrapper}>
            <LoginForm />
          </div>
        )}
      />
      <Media
        query="(min-width: 768px) and (max-width: 1279px)"
        render={() => (
          <Background>
            <Login />
            <LoginForm />
          </Background>
        )}
      />
      <Media
        query="(min-width: 1280px)"
        render={() => (
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
        )}
      />
    </>
  );
};

export default LoginPage;
