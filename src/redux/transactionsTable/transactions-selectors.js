import { createSelector } from 'reselect';

export const getBalance = state => state.finance.totalBalance;

export const getTransactions = state => state.finance.tableTransactions;
export const getFiltredValue = state => state.finance.filter;

export const getVisibleTransatcions = createSelector(
  [getTransactions, getFiltredValue],
  (items, filter) => {
    // console.log('itens', items);
    // const normalizeFilter = filter.toLowerCase();
    // const showItem = items.filter(item =>
    //   item.name.toLowerCase().includes(normalizeFilter),
    // );
    // return showItem;
  },
);
