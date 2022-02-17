import React, {useState} from 'react';
import s from './TransactionForm.module.scss'; 
import { Formik, Form, Field, } from 'formik';
import * as Yup from 'yup';
// import Button from '../Button';
import Switch from './Switch';

export default function TransactionForm() {
   const validationsSchema = Yup.object().shape({
    typeOfTransaction: Yup.string().required('Type is required'),
    category: Yup.string(),
    amount: Yup.number().min(0).required('Amount is required'),
    date: Yup.date().required('Date is required'),
    comment: Yup.string()
   });
  
  const [chooseSelect, setSelect] = useState(false);
  const [category, setCategory] = useState();

  const onSwitchChecked = evt => {
    setSelect(evt.target.checked);
    setCategory(null);
  };

  return (

    <div className={s.container}>
    <div className={s.form}>
    <h3 className={s.title}>Add Transaction</h3>

    <Formik
      initialValues={{
        typeOfTransaction: 'Expenses',
        // category: 'Выберите категорию',
        amount: '',
        date: '',
        comment: ''
      }}
      //onSubmit={openModal}
      validationSchema={validationsSchema}
    >

    {({ errors, touched, isSubmitting }) => (
      <Form>
        {/* <div id="my-radio-group"></div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="typeOfTransaction" value="Income" />
              Income
            </label>
            <label>
              <Field type="radio" name="typeOfTransaction" value="Expenses" />
              Expenses
            </label>
              {errors.typeOfTransaction && touched.typeOfTransaction && (
                <span className="error">{errors.typeOfTransaction}</span>
              )}
          </div> */}


       <div className={s.box}>  
           <p className={s.text} style={{ color: 'rgba(36, 204, 167, 1)' }}>
            Income
          </p> 

            <Switch    
            onSwitch={chooseSelect => onSwitchChecked(chooseSelect)}
            isChecked={chooseSelect}
            onClick={chooseSelect => onSwitchChecked(chooseSelect)}
          />
          <p className={s.text} style={{ color: 'rgba(255, 101, 150, 1)' }}>
            Expenses
          </p>

         </div> 
            <Field name="category" as="select" hidden>
              <option value="">Choose a category</option>
              <option value="Main">Main</option>
              <option value="Food">Food</option>
              <option value="Car">Car</option>
              <option value="Развитие">Развитие</option>
              <option value="Children">Children</option>
              <option value="House">House</option>
              <option value="Education">Education</option>
              <option value="Other expenses">Other expenses</option>
            </Field>
            {errors.category && touched.category &&
        <span className="input-feedback">
          {errors.category}
        </span>}

            <Field name="amount"
            type="number"
            placeholder="0.00" />
            {errors.amount &&
        touched.amount &&
        <span className="input-feedback">
          {errors.amount}
        </span>}

            <Field
            name="date"
            type="date"
          />

            <Field name="comment" as="textarea"
            type="text"
            placeholder="Comment" />

          {/* <Button disabled={isSubmitting} type="submit" contentBtn="Add" />
          <Button type="submit" contentBtn="Cancel" /> */}

          {/* {isLoading && <LoaderSpinner />} */}
        </Form>
      )}
      </Formik>

      </div>
    </div>

  );
}