/* eslint-disable default-param-last */
import { Action, Reducer } from 'redux';
import {
  OrdersActionType,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_SINGLE_ORDER_START,
  FETCH_SINGLE_ORDER_SUCCESS,
  FETCH_SINGLE_ORDER_FAILED,
} from '@/redux/actionTypes/orders';
import { OrdersState } from '@/types/ordersTypes';

const initialState: OrdersState = {
  orders: [],
  loading: true,
  singleOrder: {
    order: undefined,
    loading: true,
    error: false,
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
    case FETCH_SINGLE_ORDER_START: {
      return {
        ...state,
        singleOrder: {
          order: undefined,
          loading: true,
          error: false,
        },
      };
    }
    case FETCH_SINGLE_ORDER_SUCCESS: {
      return {
        ...state,
        singleOrder: {
          order: action.payload,
          loading: false,
          error: false,
        },
      };
    }
    case FETCH_SINGLE_ORDER_FAILED: {
      return {
        ...state,
        singleOrder: {
          order: undefined,
          loading: false,
          error: true,
        },
      };
    }
    default:
      return state;
  }
};
