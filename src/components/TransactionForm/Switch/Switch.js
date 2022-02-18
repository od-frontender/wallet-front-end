import PropTypes from 'prop-types';
import s from './Switch.module.scss';

export default function Switch({ isChecked, onSwitch, value }) {
  return (
    <div className={s.box}>
      <span className={`${s.income} ${isChecked && s.checked}`}>
        Income
      </span>

      <div>
        <label htmlFor="type" className={s.switch_for}>
          <input
            // name={name}
            value={value}
            type="checkbox"
            id="type"
            checked={isChecked}
            onChange={onSwitch}
            readOnly
          />
          <span className={s.switch}></span>
        </label>
      </div>

      <span className={`${s.costs} ${!isChecked && s.checked}`}>
        Expenses
      </span>
    </div>
  );
}

Switch.propTypes = {
  onchange: PropTypes.func,
  isChecked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};