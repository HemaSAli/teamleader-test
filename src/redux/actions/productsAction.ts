import { ordersAPIs } from '@/api';
import { Dispatch } from 'redux';
import {
  OrdersActionType,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_SINGLE_ORDER_START,
  FETCH_SINGLE_ORDER_SUCCESS,
  FETCH_SINGLE_ORDER_FAILED,
} from '../actionTypes/orders';

export const fetchOrders = () => (dispatch: Dispatch<OrdersActionType>) => {
  dispatch({ type: FETCH_ORDERS_START });
  ordersAPIs.fetchOrders().then((result) => {
    dispatch({ type: FETCH_ORDERS_SUCCESS, payload: result.orders });
  });
};

export const fetchOrder = (orderID: string) => (dispatch: Dispatch<OrdersActionType>) => {
  dispatch({ type: FETCH_SINGLE_ORDER_START });
  ordersAPIs.fetchOrder(orderID).then((result) => {
    if (result.selectedOrder) {
      dispatch({ type: FETCH_SINGLE_ORDER_SUCCESS, payload: result.selectedOrder });
    } else {
      dispatch({ type: FETCH_SINGLE_ORDER_FAILED, payload: undefined });
    }
  });
};
