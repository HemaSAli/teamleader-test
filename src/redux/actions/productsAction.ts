import { productsAPIs } from '@/api';
import { Dispatch } from 'redux';
import {
  ProductsActionTypes,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from '../actionTypes/products';

export const fetchProducts = () => (dispatch: Dispatch<ProductsActionTypes>) => {
  dispatch({ type: FETCH_PRODUCTS_START });
  productsAPIs.fetchProducts().then((result) => {
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: result });
  }).catch((error) => {
    dispatch({ type: FETCH_PRODUCTS_FAILED, payload: error.message });
  });
};
