/* eslint-disable default-param-last */
import { Action, Reducer } from 'redux';
import { OrdersActionType, FETCH_ORDERS_START, FETCH_ORDERS_SUCCESS } from '@/redux/actionTypes/orders';
import { OrdersState } from '@/types/ordersTypes';

const initialState: OrdersState = {
  orders: [],
  loading: true,
  signleOrder: {
    id: '',
    total: '',
    'customer-id': '',
    items: [],
  },
};

export const OrdersReducer: Reducer<OrdersState, Action> = (
  state = initialState,
  action: OrdersActionType,
) => {
  switch (action.type) {
    case FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    default:
      return state;
  }
};
