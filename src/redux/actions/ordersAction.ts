/* eslint-disable function-paren-newline */
/* eslint-disable indent */
import { ordersAPIs, customersAPIs } from '@/api';
import { Order } from '@/types/ordersTypes';
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
  REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER,
  REMOVE_ONE_PRODUCT_FROM_ORDER,
  REMOVE_PRODUCT_FROM_ORDER_FAILED,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILED,
} from '../actionTypes/orders';
import type { RootState } from '../store';

export const fetchOrders = () => (dispatch: Dispatch<OrdersActionType>) => {
  dispatch({ type: FETCH_ORDERS_START });
  return ordersAPIs.fetchOrders().then((result) => {
    dispatch({ type: FETCH_ORDERS_SUCCESS, payload: result.orders });
  });
};

export const fetchOrder = (orderID: string) => (dispatch: Dispatch<OrdersActionType>) => {
  dispatch({ type: FETCH_SINGLE_ORDER_START });
  return ordersAPIs.fetchOrder(orderID).then((result) => {
    dispatch({ type: FETCH_SINGLE_ORDER_SUCCESS, payload: result });
  }).catch((error) => {
    dispatch({ type: FETCH_SINGLE_ORDER_FAILED, payload: error.message });
  });
};

export const addProductToOrder = (productID: string) => (
  dispatch: Dispatch<OrdersActionType>,
  currentState: () => RootState,
) => ordersAPIs.addProductToOrder(productID).then((product) => {
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

export const removeProductFromItem = (
  productID: string, unitPrice: string, removeAll: boolean,
  ) => (
  dispatch: Dispatch<OrdersActionType>, currentState: () => RootState,
  ) => ordersAPIs.removeProductFromOrder(productID).then(() => {
  const { OrdersReducer: { singleOrder: { order: { items } } } } = currentState();
  const productInOrder = items.find((productItem) => productItem['product-id'] === productID);
  const isOneInQuantity = productInOrder?.quantity === '1';
  if (!productInOrder) {
    dispatch({ type: REMOVE_PRODUCT_FROM_ORDER_FAILED, payload: 'Product doesnt exist' });
  } else if (removeAll || isOneInQuantity) {
    const productQuantity = productInOrder?.quantity;
    dispatch({ type: REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER, payload: { productQuantity, productID, unitPrice } });
  } else {
    dispatch({ type: REMOVE_ONE_PRODUCT_FROM_ORDER, payload: { productID, unitPrice } });
  }
}).catch((error) => {
  dispatch({ type: REMOVE_PRODUCT_FROM_ORDER_FAILED, payload: error.message });
});

export const placeOrder = (
  order: Order,
  ) => (
  dispatch: Dispatch<OrdersActionType>,
  ) => customersAPIs.getCustomer(order['customer-id']).then((customer) => { // Fetch Customer
      const { revenue } = customer;
      if (!order.items.length) { // Order is empty
        dispatch({ type: PLACE_ORDER_SUCCESS });
        console.log('Failed !, there are no items in the order');
      } else if (Number(order.total) > Number(revenue)) {
       dispatch({ type: PLACE_ORDER_FAILED });
       console.log('Failed !, the customre revenue less than the total price of order');
     } else {
       dispatch({ type: PLACE_ORDER_SUCCESS });
       console.log(`Success for Order ${order.id} for customer ${order['customer-id']} with total ${order.total}`);
     }
    }).catch(() => { // Failed fetch customer
      dispatch({ type: PLACE_ORDER_FAILED });
    });
