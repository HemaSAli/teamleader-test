import { ordersAPIs } from '@/api';
import { Dispatch } from 'redux';
import { OrdersActionType, FETCH_ORDERS_START, FETCH_ORDERS_SUCCESS } from '../actionTypes/orders';

export const fetchOrders = () => (dispatch: Dispatch<OrdersActionType>) => {
  dispatch({ type: FETCH_ORDERS_START });
  ordersAPIs.fetchOrders().then((result) => {
    dispatch({ type: FETCH_ORDERS_SUCCESS, payload: result.orders });
  });
};
