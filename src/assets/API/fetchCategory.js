const axios = require('axios');


axios.defaults.baseURL = 'https://wallet-goit-final-project.herokuapp.com/api';

const getCategories = () => {
    return axios.get('/category').then(response => response.data);
};

function fetchCategory() {

    actions.fetchCategory,
        async(_, { rejectWithValue }) => {
            try {
                const categories = await getCategories();

                return categories;
            } catch (error) {
                return rejectWithValue(error);
            }
        },

};


export default fetchCategory;