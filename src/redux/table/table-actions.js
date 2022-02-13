import { createAction } from '@reduxjs/toolkit';

const fetchTransactions = createAction('transactions/fetch');

const fetchBalance = createAction('balance/fetch');

const actions = { fetchTransactions, fetchBalance };

export default actions;
