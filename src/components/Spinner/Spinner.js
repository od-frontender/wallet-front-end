import { Audio } from 'react-loader-spinner';
import s from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={s.loader}>
      <Audio type="Circles" color="#4a56e2" height={100} width={100} />
    </div>
  );
};

export default Spinner;
