import { createAction } from '@reduxjs/toolkit';

const fetchTransactions = createAction('transactions/fetch');

const getBalance = createAction('transactions/getBalance');

export const filtredTransactions = createAction('transactions/changeFilter');

const actions = { fetchTransactions, getBalance, filtredTransactions };

export default actions;
