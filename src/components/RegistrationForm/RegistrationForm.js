import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './RegistrationForm.module.scss';
import Icons from '../../images/sprite.svg';
import Logo from '../Logo';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'confirmPassword':
        return setConfirmPassword(value);
      case 'name':
        return setName(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      email === '' ||
      password === '' ||
      name === '' ||
      confirmPassword === ''
    ) {
      alert('Enter the registration data');
      return;
    }
    const newUser = { email, password, name };
    dispatch(authOperations.register(newUser));
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
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
            <label className={s.label}>
              <svg width="20" height="16" className={s.svg}>
                <use xlinkHref={`${Icons}#icon-passwordIcon`} />
              </svg>
              <input
                className={s.input}
                placeholder="Confirm password"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />
            </label>
            <label className={s.label}>
              <svg width="20" height="16" className={s.svg}>
                <use xlinkHref={`${Icons}#icon-userIcon`} />
              </svg>
              <input
                className={s.input}
                placeholder="Your Name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>
          </div>

          <button type="submit" className={s.button}>
            Registration
          </button>

          <button className={s.button}>Login</button>
        </form>
      </div>
    </>
  );
}
