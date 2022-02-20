import { Order } from '@/types/ordersTypes';
import { Product } from '@/types/productsTypes';

export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_SINGLE_ORDER_START = 'FETCH_SINGLE_ORDER_START';
export const FETCH_SINGLE_ORDER_SUCCESS = 'FETCH_SINGLE_ORDER_SUCCESS';
export const FETCH_SINGLE_ORDER_FAILED = 'FETCH_SINGLE_ORDER_FAILED';

export const ADD_CURRENT_PRODUCT_TO_ORDER = 'ADD_CURRENT_PRODUCT_TO_ORDER';
export const ADD_NEW_PRODUCT_TO_ORDER = 'ADD_NEW_PRODUCT_TO_ORDER';
export const ADD_PRODUCT_TO_ORDER_FAILED = 'ADD_PRODUCT_TO_ORDER_FAILED';

type FetchOrdersStart = {
  type: typeof FETCH_ORDERS_START;
};

type FetchSingleOrdersStart = {
  type: typeof FETCH_SINGLE_ORDER_START;
};

type FetchOrdersSuccess = {
  type: typeof FETCH_ORDERS_SUCCESS;
  payload: Order[];
};

type FetchSingleOrderSuccess = {
  type: typeof FETCH_SINGLE_ORDER_SUCCESS;
  payload: Order;
};

type FetchSingleOrderFailed = {
  type: typeof FETCH_SINGLE_ORDER_FAILED;
  payload: string;
};

type AddCurrentProductToOrder = {
  type: typeof ADD_CURRENT_PRODUCT_TO_ORDER;
  payload: Product,
};
type AddNewProductToOrder = {
  type: typeof ADD_NEW_PRODUCT_TO_ORDER;
  payload: Product,
};

type AddProductToOrderFailed = {
  type: typeof ADD_PRODUCT_TO_ORDER_FAILED;
  payload: string;
};

export type OrdersActionType =
  | FetchOrdersStart
  | FetchOrdersSuccess
  | FetchSingleOrdersStart
  | FetchSingleOrderSuccess
  | FetchSingleOrderFailed
  | AddCurrentProductToOrder
  | AddNewProductToOrder
  | AddProductToOrderFailed;
