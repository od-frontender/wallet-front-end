import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import Box from '@material-ui/core/Box';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';
import { useDispatch } from 'react-redux'; 
// import Operations from '../../redux/////'; нужно добавить редакс
import Button from '../Button';
import Switch from './Switch';
import SelectCategory from './SelectCategory';

// import { categories } from '../../assets/API/fetchCategory';

import 'react-datepicker/dist/react-datepicker.css';
import s from './TransactionForm.module.scss';

export default function TransactionForm({ onClose }) {
  const dispatch = useDispatch();
  const [chooseType, setChooseType] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [type, setType] = useState('-');

  const handleChangeType = () => {
    setChooseType(!chooseType);
    setType('+');
  };

  const handleChangeDate = e => {
    setIsOpenDate(!isOpenDate);
    setStartDate(e);
  };

  const handleClickDate = e => {
    e.preventDefault();
    setIsOpenDate(!isOpenDate);
  };

  const dateMoment = moment(new Date()).format('DD.MM.YYYY');

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleSubmitForm = (
    { type, money, category, date, comment },
    { resetForm },
  ) => {
    
    let currentCategory = {};
    // if (type === '-') {
    //   currentCategory = categories.find(i => category === i.name);
    // } else {
    //   currentCategory = addIncomes.find(i => category === i.name);
    // }
    console.log({
      type,
      category: currentCategory,
      money,
      date,
      comment,
    });

    dispatch(
      // authOperations.addTransactions({
      //   type,
      //   // category: type === '-' ? categoryCosts : categoryIncomes,
      //   category: currentCategory,
      //   money,
      //   date,
      //   comment,
      // }),
    );
    resetForm();
    onClose();
  };

  const validationsSchema = Yup.object().shape({
    type: Yup.string().required('Type is required'),
    category: Yup.string('Choose a category').required('Category is required'),
    money: Yup.number('Enter your amount')
      .min(0)
      .required('Amount is required'),
    date: Yup.string(),
    comment: Yup.string('Enter your comment').max(
      12,
      'No more than 20 characters',
    ),
  });

  return (
    <div className={s.modal}>
      <div className={s.container}>
        <Formik
          initialValues={{
            type: !chooseType ? '-' : '+',
            category: '',
            money: '',
            date: dateMoment,
            comment: '',
          }}
          onSubmit={handleSubmitForm}
          validationSchema={validationsSchema}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form className={s.form}>
              <h3 className={s.title}>Add transaction</h3>

              <Switch
                isChecked={chooseType}
                onSwitch={handleChangeType}
                value="type"
              />

              {chooseType ? (
                <Box className={s.categoryBox}>
                  <SelectCategory label="category" name="category">
                    <option className={s.optionSelect} value="">
                      Choose category
                    </option>

                    {/* {addIncomes.map(category => (
                      <option
                        className={styles.optionChoose}
                        key={category._id}
                        value={category.name}
                      >
                        {category.name}
                      </option>
                    ))} */}
                  </SelectCategory>
                </Box>
              ) : (
                <Box className={s.categoryBox}>
                  <SelectCategory label="category" name="category">
                    <option className={s.optionSelect} value="">
                      Choose category
                    </option>

                    {/* {categories.map(category => (
                      <option
                        className={s.optionChoose}
                        key={category._id}
                        value={category.name}
                      >
                        {category.name}
                      </option> */}
                    ))
                  </SelectCategory>
                </Box>
              )}

              <div className={s.Credentials}>
                <div className={s.AmountContainer}>
                  <Field
                    name="money"
                    type="number"
                    placeholder="0.00"
                    className={s.amount}
                  />
                  {errors.money && touched.money && (
                    <div className={s.inputFeedback}>{errors.money}</div>
                  )}
                </div>

                <Box className={s.dateBox}>
                  <DatePicker
                    maxDate={addMonths(new Date(), 0)}
                    showDisabledMonthNavigation
                    name="date"
                    open={false}
                    className={s.date}
                    selected={startDate}
                    onChange={handleChangeDate}
                    dateFormat="dd.MM.yyyy"
                  />

                  {/* <button
                    className={s.iconCalendar}
                    onClick={handleClickDate}
                  >
                    <Calendar svg={s.svgCalendar} />
                  </button> */}

                  {isOpenDate && (
                    <div className={s.datePicker}>
                      <DatePicker
                        maxDate={addMonths(new Date(), 0)}
                        showDisabledMonthNavigation
                        closeOnScroll={true}
                        selected={startDate}
                        onChange={handleChangeDate}
                        inline
                      />
                    </div>
                  )}
                </Box>
              </div>

              <Box className={s.box_select}>
                <Field
                  name="comment"
                  as="textarea"
                  type="text"
                  placeholder="Comment"
                  className={s.comment}
                />
                {errors.comment && touched.comment && (
                  <div className={s.inputFeedback}>{errors.comment}</div>
                )}
              </Box>

              <Button type="submit" contentBtn="Add" button="Button" />

              <Button
                handleClick={handleClick}
                contentBtn="Cancel"
                button="ButtonSecondary"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}