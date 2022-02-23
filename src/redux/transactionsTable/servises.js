import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-goit-final-project.herokuapp.com';

export const getTransactions = async () => {
  const { data } = await axios.get('/transactions');

  return data;
};

export const addTransactions = async () => {
  const { data } = await axios.post('/transactions');
  console.log('transactions post', data);
  return data;
};

// export const addContact = createAsyncThunk(
//   contactsActions.addContact,

//   async (data) => {
//     const { name, number } = data;
//     const contact = await addContactFetch(name, number);

//     return contact;
//   }
// );
