const axios = require('axios');
const { config } = require('../config/config');

const apiClient = axios.create({
  baseURL: config.baseURL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
});

module.exports = { apiClient };