const axios = require('axios');

axios.defaults.baseURL = 'https://wallet-goit-final-project.herokuapp.com';

export const getCategories = () => {
  return axios.get('/category').then(response => response.data);
};
