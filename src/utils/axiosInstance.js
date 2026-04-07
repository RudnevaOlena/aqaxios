import axios from 'axios';
import { config } from '../config/config.js';
export const apiClient = axios.create({
  baseURL: config.baseURL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
});