import s from './Blur.module.scss';

const Blur = ({ children }) => {
  return <div className={s.blur}>{children}</div>;
};

export default Blur;
