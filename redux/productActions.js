import axios from 'axios';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};