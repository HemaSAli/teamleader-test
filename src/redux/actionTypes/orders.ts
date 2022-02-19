import { Order } from '@/types/ordersTypes';

export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_SINGLE_ORDER_START = 'FETCH_SINGLE_ORDER_START';
export const FETCH_SINGLE_ORDER_SUCCESS = 'FETCH_SINGLE_ORDER_SUCCESS';
export const FETCH_SINGLE_ORDER_FAILED = 'FETCH_SINGLE_ORDER_FAILED';

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
  payload: undefined;
};

export type OrdersActionType =
  | FetchOrdersStart
  | FetchOrdersSuccess
  | FetchSingleOrdersStart
  | FetchSingleOrderSuccess
  | FetchSingleOrderFailed;
