import { Order } from '@/types/ordersTypes';

export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';

type FetchOrdersStart = {
  type: typeof FETCH_ORDERS_START;
}

type FetchOrdersSuccess = {
  type: typeof FETCH_ORDERS_SUCCESS;
  payload: Order[]
}

export type OrdersActionType = FetchOrdersStart | FetchOrdersSuccess;
