import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import s from './LoginForm.module.scss';
import Icons from '../../images/sprite.svg';
import Logo from '../Logo';
export default function LoginForm() {
  // const dispatch = useDispatch();
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
    // dispatch(
    //   authAction.userRegister({ email, password, confirmPassword, name }),
    // );
    // setEmail('');
    // setPassword('');
    // setConfirmPassword('');
    // setName('');
  };

  return (
    <>
      <div className={s.form_container}>
        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
          <Logo />
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

          <button type="submit" className={s.button}>
            Login
          </button>

          <button className={s.button}>Registration</button>
        </form>
      </div>
    </>
  );
}
