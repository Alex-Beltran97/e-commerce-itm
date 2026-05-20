import axios from './client';

export const getProducts = async () => {
  try {
    const response = await axios.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};