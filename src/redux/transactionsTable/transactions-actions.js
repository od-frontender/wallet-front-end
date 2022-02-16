import { createAction } from '@reduxjs/toolkit';

export const fetchTransactions = createAction('transactions/fetch');

export const getBalance = createAction('transactions/getBalance');

export const filtredTransactions = createAction('transactions/changeFilter');

// const actions = { fetchTransactions, getBalance, filtredTransactions };

// export default actions;
