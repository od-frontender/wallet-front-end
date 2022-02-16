import s from './Switch.module.scss';

export default function Switch({ isChecked, onSwitch }) {
  return (
    <div className={s.box}>
      <div className={s.switch_box}>
        <div>
          <div>
            <input
              type="checkbox"
              id="income"
              className={s.switch}
              checked={isChecked}
              onClick={onSwitch}
              readOnly
            />
            <label htmlFor="income" className={s.switch_for}></label>
          </div>
        </div>
      </div>
    </div>
  );
}