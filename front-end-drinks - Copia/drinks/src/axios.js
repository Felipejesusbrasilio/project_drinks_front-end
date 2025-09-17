import axios from 'axios';

const api = axios.create({
  baseURL: 'https://drinks-vilas.vercel.app/'
});

export default api;
