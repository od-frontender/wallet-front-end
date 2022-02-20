import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import s from './LoginForm.module.scss';
import Icons from '../../images/sprite.svg';
import Logo from '../Logo';
import Button from '../Button';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Enter the registration data');
      return;
    }
    const newUser = { email, password };
    dispatch(authOperations.login(newUser));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className={s.form_container}>
        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
          <Logo />
          <div className={s.label_wrapper}>
            <label className={s.label}>
              <svg width="20" height="16" className={s.svg}>
                <use xlinkHref={`${Icons}#icon-emailIcon`} />
              </svg>
              <input
                className={s.input}
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
            <label className={s.label}>
              <svg width="20" height="16" className={s.svg}>
                <use xlinkHref={`${Icons}#icon-passwordIcon`} />
              </svg>
              <input
                className={s.input}
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
          </div>
          <Button type="submit" classBtn="green" contentBtn="Login" />

          <NavLink to="/register" className="link">
            <Button contentBtn="Registration" />
          </NavLink>
        </form>
      </div>
    </>
  );
}
