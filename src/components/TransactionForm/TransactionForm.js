import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';
import Box from '@material-ui/core/Box';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';
import validationsSchema from './validationsSchema';
// import Datetime from 'react-datetime';
import { getCategories } from '../../redux/categories/categories-selectors';
// import Operations from '../../redux/////'; нужно добавить редакс
import Button from '../Button';
import Select from './FormElements/Select';
import TextArea from './FormElements/TextArea';
import Amount from './FormElements/Amount';
import Switch from './Switch';
import { addTransactions } from '../../redux/transactionsTable/transactions-operations';

import 'react-datepicker/dist/react-datepicker.css';
import s from './TransactionForm.module.scss';

export default function TransactionForm({ onClose }) {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const [currentCategory, setCurrentCategory] = useState(' ');
  const [sum, setSum] = useState(0);
  const [comment, setComment] = useState(' ');

  //
  console.log('categories', categories);

  const [chooseType, setChooseType] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [type, setType] = useState(false);

  const handleChangeType = () => {
    setChooseType(!chooseType);
    setType(true);
  };
  // console.log(typeof sum);
  const handleChangeDate = e => {
    console.log('e', e);
    // setIsOpenDate(!isOpenDate);
    // setStartDate(e);
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

  const handleSubmitForm = () =>
    // { resetForm },
    {
      console.log(currentCategory, sum, comment);
      // let currentCategory = {};
      // if (type === '-') {
      //   currentCategory = categories.find(i => category === i.name);
      // } else {
      //   currentCategory = addIncomes.find(i => category === i.name);
      // }

      dispatch(
        addTransactions({
          category: currentCategory,
          sum,
          comment,
          type,
        }),
      );
      // authOperations.addTransactions({    //   type,
      //   // category: type === '-' ? categoryCosts : categoryIncomes,
      //   category: currentCategory,    //   money,    //   date,    //   comment,
      // }),
      // resetForm();
      onClose();
    };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'category':
        setCurrentCategory(String(value));
        break;
      case 'money':
        setSum(Number(value));
        break;
      case 'comment':
        setComment(String(value));
        break;

      default:
        break;
    }
  };

  return (
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

            {!chooseType ? (
              <Box className={s.categoryBox}>
                <Select
                  handleChange={handleChange}
                  categories={categories}
                  optionSelect={s.optionSelect}
                />
              </Box>
            ) : null}

            <div className={s.Credentials}>
              <div className={s.AmountContainer}>
                <Amount handleChange={handleChange} amount={s.amount} />

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
                  // onChange={handleChangeDate}
                  dateFormat="dd.MM.yyyy"
                />

                {/* <button ???
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
                      // onChange={handleChangeDate}
                      inline
                    />
                  </div>
                )}
              </Box>
            </div>
            <Box className={s.box_select}>
              <TextArea handleChange={handleChange} comment={s.comment} />
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
    // {/* </div> */}
  );
}
// {showModal && (
//   <Modal
//     onClose={toggleModal}
//     children={
//       <div className={s.ModalContent}>
//         <span>Are you sure you want to logout?</span>
//         <div className={s.buttonView}>
//           <button
//             type="button"
//             className={s.buttonLogoutYN}
//             onClick={logout}
//           >
//             Yes
//           </button>
//           <button
//             type="button"
//             className={s.buttonLogoutYN}
//             onClick={toggleModal}
//           >
//             No
//           </button>
//         </div>
//       </div>
//     }
//   />
// )}
// {/* <SelectCategory label="category" name="category">
//               <option className={s.optionSelect} value="">
//                 Choose category

//               </option> */}

//             {/* {addIncomes.map(category => (
//                   <option
//                     className={styles.optionChoose}
//                     key={category._id}
//                     value={category.name}
//                   >
//                     {category.name}
//                   </option>
//                 ))} */}
//             {/* </SelectCategory> */}
// <Box className={s.categoryBox}>
//   <SelectCategory label="category" name="category">
//     <option className={s.optionSelect} value="">
//       Choose category
//     </option>
//     {/* {categories.map(category => (
//         <option
//           className={s.optionChoose}
//           key={category._id}
//           value={category.name}
//         >
//           {category.name}
//         </option> */}
//     {/* )) */}
//   </SelectCategory>
// </Box>
