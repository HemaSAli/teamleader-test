/* eslint-disable default-param-last */
import { Action, Reducer } from 'redux';
import { CounterActionTypes, FETCH_ORDERS } from '@/redux/actionTypes/orders';
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
  action: CounterActionTypes,
) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state, loading: true };
    default:
      return state;
  }
};
