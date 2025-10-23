import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-end-ecommerce-tawny.vercel.app/'
});

export default api;
