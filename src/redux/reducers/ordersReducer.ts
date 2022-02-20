/* eslint-disable default-param-last */
import { Action, Reducer } from 'redux';
import {
  OrdersActionType,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_SINGLE_ORDER_START,
  FETCH_SINGLE_ORDER_SUCCESS,
  FETCH_SINGLE_ORDER_FAILED,
  ADD_NEW_PRODUCT_TO_ORDER,
  ADD_CURRENT_PRODUCT_TO_ORDER,
} from '@/redux/actionTypes/orders';
import { Order, OrdersState } from '@/types/ordersTypes';
import handleTotal from '@/functions/handleTotal';

const initialOrder: Order = {
  id: '',
  'customer-id': '',
  total: '',
  items: [],
};

const initialState: OrdersState = {
  orders: [],
  loading: true,
  singleOrder: {
    order: initialOrder,
    loading: true,
    error: '',
  },
};

export const OrdersReducer: Reducer<OrdersState, Action> = (
  state = initialState,
  action: OrdersActionType,
) => {
  switch (action.type) {
    case FETCH_ORDERS_START:
      return { ...state, loading: true };
    case FETCH_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload };
    case FETCH_SINGLE_ORDER_START: {
      return {
        ...state,
        singleOrder: { order: initialOrder, loading: true, error: '' },
      };
    }
    case FETCH_SINGLE_ORDER_SUCCESS: {
      return {
        ...state,
        singleOrder: { order: action.payload, loading: false, error: '' },
      };
    }
    case FETCH_SINGLE_ORDER_FAILED: {
      return {
        ...state,
        singleOrder: { order: initialOrder, loading: false, error: action.payload },
      };
    }
    case ADD_CURRENT_PRODUCT_TO_ORDER: {
      const { payload: { 'product-id': productID, 'unit-price': unitPrice } } = action;
      return {
        ...state,
        singleOrder: {
          ...state.singleOrder,
          order: {
            ...state.singleOrder.order,
            items: state.singleOrder.order?.items.map((product) => {
              if (product['product-id'] === productID) {
                return {
                  ...product,
                  quantity: (Number(product.quantity) + 1).toString(),
                  total: handleTotal(unitPrice, product.total),
                };
              }
              return product;
            }),
          },
        },
      };
    }
    case ADD_NEW_PRODUCT_TO_ORDER: {
      const { payload: { 'unit-price': unitPrice } } = action;
      return {
        ...state,
        singleOrder: {
          ...state.singleOrder,
          order: {
            ...state.singleOrder.order,
            items: [...state.singleOrder.order.items, { ...action.payload, total: unitPrice.toString(), quantity: '1' }],
          },
        },
      };
    }
    default:
      return state;
  }
};
