import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import Register from '../../components/Register';
import Media from 'react-media';
import Background from '../../components/Background/Background';
import Blur from '../../components/Blur/Blur';

// import st from './RegisterPage.module.scss';
import s from '../LoginPage/LoginPage.module.scss';

const RegisterPage = () => {
  return (
    <>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <div className={s.loginPage_wrapper}>
            <RegistrationForm />
          </div>
        )}
      />
      <Media
        query="(min-width: 768px) and (max-width: 1279px)"
        render={() => (
          <Background>
            <Register />
            <RegistrationForm />
          </Background>
        )}
      />
      <Media
        query="(min-width: 1280px)"
        render={() => (
          <Background>
            <div className={s.loginPage_wrapper}>
              <div className={s.loginPage_image}>
                <Register />
              </div>
              <div className={s.loginPage_form}>
                <Blur>
                  <RegistrationForm />
                </Blur>
              </div>
            </div>
          </Background>
        )}
      />
    </>
  );
};

export default RegisterPage;
