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
  REMOVE_ONE_PRODUCT_FROM_ORDER,
  REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER,
} from '@/redux/actionTypes/orders';
import { Order, OrdersState } from '@/types/ordersTypes';
import { handleAdd, handleSub } from '@/functions/handleTotal';

const initialOrder: Order = {
  id: '',
  'customer-id': '',
  total: '',
  items: [],
};

export const initialState: OrdersState = {
  orders: [],
  loading: true,
  singleOrder: {
    order: initialOrder,
    loading: true,
    error: '',
  },
};

export const OrdersReducer: Reducer<OrdersState, Action | OrdersActionType> = (
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
            total: handleAdd(unitPrice, state.singleOrder.order.total),
            items: state.singleOrder.order?.items.map((product) => {
              if (product['product-id'] === productID) {
                return {
                  ...product,
                  quantity: (Number(product.quantity) + 1).toString(),
                  total: handleAdd(unitPrice, product.total),
                };
              }
              return product;
            }),
          },
        },
      };
    }
    case ADD_NEW_PRODUCT_TO_ORDER: {
      const { payload: { 'unit-price': unitPrice, 'product-id': productID } } = action;
      return {
        ...state,
        singleOrder: {
          ...state.singleOrder,
          order: {
            ...state.singleOrder.order,
            total: handleAdd(unitPrice, state.singleOrder.order.total),
            items: [...state.singleOrder.order.items, {
              'unit-price': unitPrice, 'product-id': productID, total: unitPrice.toString(), quantity: '1',
            }],
          },
        },
      };
    }
    case REMOVE_ONE_PRODUCT_FROM_ORDER: {
      const { payload: { productID, unitPrice } } = action;
      return {
        ...state,
        singleOrder: {
          ...state.singleOrder,
          order: {
            ...state.singleOrder.order,
            total: handleSub(unitPrice, state.singleOrder.order.total),
            items: state.singleOrder.order?.items.map((product) => {
              if (product['product-id'] === productID) {
                return {
                  ...product,
                  quantity: (Number(product.quantity) - 1).toString(),
                  total: handleSub(unitPrice, product.total),
                };
              }
              return product;
            }),
          },
        },
      };
    }
    case REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER: {
      const { payload: { unitPrice, productID, productQuantity } } = action;
      return {
        ...state,
        singleOrder: {
          ...state.singleOrder,
          order: {
            ...state.singleOrder.order,
            total: handleSub(unitPrice, state.singleOrder.order.total, productQuantity),
            items: state.singleOrder.order.items.filter((productItem) => productItem['product-id'] !== productID),
          },
        },
      };
    }
    default:
      return state;
  }
};
