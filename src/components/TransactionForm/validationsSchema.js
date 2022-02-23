import * as Yup from 'yup';

const validationsSchema = Yup.object().shape({
  type: Yup.string().required('Type is required'),
  category: Yup.string('Choose a category').required('Category is required'),
  money: Yup.number('Enter your amount').min(0).required('Amount is required'),
  date: Yup.string(),
  comment: Yup.string('Enter your comment').max(
    12,
    'No more than 20 characters',
  ),
});
export default validationsSchema;
