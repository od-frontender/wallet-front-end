import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import Register from '../../components/Register';

import s from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  return (
    <div className={s.registrationPage_wrapper}>
      <Register />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
