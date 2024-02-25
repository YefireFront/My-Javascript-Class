const axios = require('axios');

const customConfig = {
  baseURL: 'https://api.example.com/',
  timeout: 5000,
  headers: {'Authorization': 'Bearer YOUR_API_TOKEN'}
};

const api = axios.create(customConfig);

api.get('/custom-endpoint')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
