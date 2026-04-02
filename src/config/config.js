const dotenv = require('dotenv');

dotenv.config();

const config = {
  baseURL: process.env.BASE_URL
};

module.exports = { config };