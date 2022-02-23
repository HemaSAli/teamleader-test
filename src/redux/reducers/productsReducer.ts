/* eslint-disable default-param-last */
import { Action, Reducer } from 'redux';
import {
  ProductsActionTypes,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCESS,
} from '@/redux/actionTypes/products';
import { ProductsState } from '@/types/productsTypes';

export const initialState: ProductsState = {
  products: [],
  loading: true,
  error: null,
};

export const productsReducer: Reducer<ProductsState, Action | ProductsActionTypes> = (
  state = initialState,
  action: ProductsActionTypes,
) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
