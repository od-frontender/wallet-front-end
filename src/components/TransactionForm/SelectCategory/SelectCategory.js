import { useField } from 'formik';
import PropTypes from 'prop-types';
import s from './SelectCategory.module.scss';

const SelectCategory = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={s.selectorContainer}>
      <label htmlFor={props.id || props.name}></label>
      <select className={s.Selector} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={s.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

SelectCategory.propTypes = {
  label: PropTypes.string.isRequired,
  props: PropTypes.node,
};

export default SelectCategory;