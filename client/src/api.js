import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
});

export const getCategories = () => api.get('/categories').then(r => r.data);
export const getProducts = () => api.get('/products').then(r => r.data);
