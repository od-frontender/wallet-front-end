import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import Register from '../../components/Register/';

import s from './RegisterPage.module.scss';

const RegisterPage = () => {
  return (
    <div className={s.registerPage_wrapper}>
      <Register />
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
