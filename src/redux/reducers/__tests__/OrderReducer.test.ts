import mockOrders from '@/api/jsonFiles/orders.json';
import { OrdersState } from '@/types/ordersTypes';
import {
  OrdersReducer,
  initialState as initialReducerState,
} from '../ordersReducer';

const initialStateForAddRemove: OrdersState = {
  orders: [],
  loading: true,
  singleOrder: {
    order: {
      id: '1',
      'customer-id': '1',
      items: [
        {
          'product-id': 'B102',
          quantity: '10',
          'unit-price': '4.99',
          total: '49.90',
        },
      ],
      total: '49.90',
    },
    loading: true,
    error: '',
  },
};
describe('Orders Reducer Cases', () => {
  it('Should return with loading true', () => {
    expect(
      OrdersReducer(initialReducerState, {
        type: 'FETCH_ORDERS_START',
      }),
    ).toEqual({
      orders: [],
      loading: true,
      singleOrder: {
        order: {
          id: '',
          'customer-id': '',
          total: '',
          items: [],
        },
        loading: true,
        error: '',
      },
    });
  });

  it('Should return with loading false and with orders', () => {
    const expectedState: OrdersState = {
      orders: mockOrders,
      loading: false,
      singleOrder: {
        order: {
          id: '',
          'customer-id': '',
          total: '',
          items: [],
        },
        loading: true,
        error: '',
      },
    };
    expect(
      OrdersReducer(initialReducerState, {
        type: 'FETCH_ORDERS_SUCCESS',
        payload: [...mockOrders],
      }),
    ).toEqual(expectedState);
  });

  it('should handle ADD_CURRENT_PRODUCT_TO_ORDER', () => {
    expect(
      OrdersReducer(initialStateForAddRemove, {
        type: 'ADD_CURRENT_PRODUCT_TO_ORDER',
        payload: {
          id: 'B102',
          price: '4.99',
          description: 'Press button',
          category: '2',
        },
      }),
    ).toEqual({
      orders: [],
      loading: true,
      singleOrder: {
        order: {
          id: '1',
          'customer-id': '1',
          items: [
            {
              'product-id': 'B102',
              quantity: '11',
              'unit-price': '4.99',
              total: '54.89',
            },
          ],
          total: '54.89',
        },
        loading: true,
        error: '',
      },
    });
  });

  it('should handle ADD_NEW_PRODUCT_TO_ORDER', () => {
    expect(
      OrdersReducer(initialStateForAddRemove, {
        type: 'ADD_NEW_PRODUCT_TO_ORDER',
        payload: {
          id: 'B101',
          price: '5.99',
          description: 'Basic on-off switch',
          category: '2',
        },
      }),
    ).toEqual({
      orders: [],
      loading: true,
      singleOrder: {
        order: {
          id: '1',
          'customer-id': '1',
          items: [
            {
              'product-id': 'B102',
              quantity: '10',
              'unit-price': '4.99',
              total: '49.90',
            },
            {
              'product-id': 'B101',
              quantity: '1',
              total: '5.99',
              'unit-price': '5.99',
            },
          ],
          total: '55.89',
        },
        loading: true,
        error: '',
      },
    });
  });

  it('should handle REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER', () => {
    expect(
      OrdersReducer(initialStateForAddRemove, {
        type: 'REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER',
        payload: {
          productID: 'B102',
          productQuantity: '10',
          unitPrice: '4.99',
        },
      }),
    ).toEqual({
      orders: [],
      loading: true,
      singleOrder: {
        order: {
          id: '1',
          'customer-id': '1',
          items: [],
          total: '0.00',
        },
        loading: true,
        error: '',
      },
    });
  });

  it('should handle REMOVE_ONE_PRODUCT_FROM_ORDER', () => {
    expect(
      OrdersReducer(initialStateForAddRemove, {
        type: 'REMOVE_ONE_PRODUCT_FROM_ORDER',
        payload: {
          productID: 'B102',
          unitPrice: '4.99',
        },
      }),
    ).toEqual({
      orders: [],
      loading: true,
      singleOrder: {
        order: {
          id: '1',
          'customer-id': '1',
          items: [
            {
              'product-id': 'B102',
              quantity: '9',
              'unit-price': '4.99',
              total: '44.91',
            },
          ],
          total: '44.91',
        },
        loading: true,
        error: '',
      },
    });
  });

  it('should handle FETCH_SINGLE_ORDER_SUCCESS', () => {
    expect(
      OrdersReducer(initialReducerState, {
        type: 'FETCH_SINGLE_ORDER_SUCCESS',
        payload: {
          id: '1',
          'customer-id': '1',
          items: [
            {
              'product-id': 'B102',
              quantity: '10',
              'unit-price': '4.99',
              total: '49.90',
            },
          ],
          total: '49.90',
        },
      }),
    ).toEqual({
      orders: [],
      loading: true,
      singleOrder: {
        order: {
          id: '1',
          'customer-id': '1',
          items: [
            {
              'product-id': 'B102',
              quantity: '10',
              'unit-price': '4.99',
              total: '49.90',
            },
          ],
          total: '49.90',
        },
        loading: false,
        error: '',
      },
    });
  });
});
