import { Product } from '@/types/productsTypes';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';

type FetchProductsStare = {
  type: typeof FETCH_PRODUCTS_START;
};

type FetchProductsSuccess = {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
};

type FetchProductsFailed = {
  type: typeof FETCH_PRODUCTS_FAILED;
  payload: string;
};

export type ProductsActionTypes =
  | FetchProductsStare
  | FetchProductsSuccess
  | FetchProductsFailed
