import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './RegisterPage.module.scss';

export default function RegisterPage() {
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
      <div className={s.register_page_container}>
        <div className={s.image_container}></div>
        <div className={s.form_container}>
          <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
            <label className={s.label}>
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
              <input
                className={s.input}
                placeholder="Confirm password"
                type="password"
                name="confirm password"
                value={confirmPassword}
                onChange={handleChange}
              />
            </label>

            <label className={s.label}>
              <input
                className={s.input}
                placeholder="Your Name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className={s.button}>
              Registration
            </button>

            <button className={s.button}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
