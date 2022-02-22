import s from './Background.module.scss';

const Background = ({ children }) => {
  return <div className={s.background}>{children}</div>;
};

export default Background;
