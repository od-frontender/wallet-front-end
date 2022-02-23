import { Field } from 'formik';

export default function Amount({ handleChange, amount }) {
  return (
    <Field
      min="0"
      name="money"
      type="number"
      placeholder="0.00"
      className={amount}
      onBlur={handleChange}
    />
  );
}
