import { createAction } from '@reduxjs/toolkit';

export const fetchTransactions = createAction('transactions/fetch');

export const getBalance = createAction('transactions/getBalance');

export const filtredTransactions = createAction('transactions/changeFilter');

export const addTransactions = createAction('transactions/add');
