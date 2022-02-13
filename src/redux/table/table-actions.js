import { createAction } from '@reduxjs/toolkit';

const fetchTransactions = createAction('transactions/fetch');

const actions = { fetchTransactions };

export default actions;
