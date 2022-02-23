import { Field } from 'formik';
export default function TextArea({ handleChange, comment }) {
  return (
    <Field
      name="comment"
      as="textarea"
      type="text"
      placeholder="Comment"
      onBlur={handleChange}
      className={comment}
    />
  );
}
