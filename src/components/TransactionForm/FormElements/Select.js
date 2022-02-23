import { Field } from 'formik';
export default function Select({ handleChange, categories, optionSelect }) {
  return (
    <Field
      name="category"
      as="select"
      placeholder="Choose a category"
      onBlur={handleChange}
      className={optionSelect}
    >
      {categories.map(({ name, id }) => (
        <option value={name} key={id}>
          {name}
        </option>
      ))}
    </Field>
  );
}
