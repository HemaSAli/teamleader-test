import { ordersAPIs } from '@/api';
import { Dispatch } from 'redux';
import {
  OrdersActionType,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_SINGLE_ORDER_START,
  FETCH_SINGLE_ORDER_SUCCESS,
  FETCH_SINGLE_ORDER_FAILED,
  ADD_CURRENT_PRODUCT_TO_ORDER,
  ADD_NEW_PRODUCT_TO_ORDER,
  ADD_PRODUCT_TO_ORDER_FAILED,
} from '../actionTypes/orders';
import type { RootState } from '../store';

export const fetchOrders = () => (dispatch: Dispatch<OrdersActionType>) => {
  dispatch({ type: FETCH_ORDERS_START });
  ordersAPIs.fetchOrders().then((result) => {
    dispatch({ type: FETCH_ORDERS_SUCCESS, payload: result.orders });
  });
};

export const fetchOrder = (orderID: string) => (dispatch: Dispatch<OrdersActionType>) => {
  dispatch({ type: FETCH_SINGLE_ORDER_START });
  ordersAPIs.fetchOrder(orderID).then((result) => {
    dispatch({ type: FETCH_SINGLE_ORDER_SUCCESS, payload: result });
  }).catch((error) => {
    dispatch({ type: FETCH_SINGLE_ORDER_FAILED, payload: error.message });
  });
};

export const addProductToOrder = (productID:string) => (dispatch: Dispatch<OrdersActionType>, currentState: () => RootState) => {
  ordersAPIs.addProductToOrder(productID).then((product) => {
    const { OrdersReducer: { singleOrder: { order: { items } } } } = currentState();
    const isProductExist = items.find((productItem) => productItem['product-id'] === productID);
    if (isProductExist) {
      dispatch({ type: ADD_CURRENT_PRODUCT_TO_ORDER, payload: product });
    } else {
      dispatch({ type: ADD_NEW_PRODUCT_TO_ORDER, payload: product });
    }
  }).catch((error) => {
    dispatch({ type: ADD_PRODUCT_TO_ORDER_FAILED, payload: error.message });
  });
};
