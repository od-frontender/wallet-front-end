import { createAction } from '@reduxjs/toolkit';

const fetchTransactions = createAction('transactions/fetch');

const getBalance = createAction('balance/getBalance');

const actions = { fetchTransactions, getBalance };

export default actions;
