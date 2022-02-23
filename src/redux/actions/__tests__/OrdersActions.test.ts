import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/redux/reducers';
// NOTE: I Import Here the dummy data just to use it in mock reducer
import mockOrders from '@/api/jsonFiles/orders.json';
import { OrdersActionType } from '@/redux/actionTypes/orders';
import { Order } from '@/types/ordersTypes';
import {
  fetchOrders,
  fetchOrder,
  addProductToOrder,
  removeProductFromItem,
  placeOrder,
} from '../ordersAction';

type Dispatch = ThunkDispatch<RootState, undefined, OrdersActionType>;
const mockStore = configureStore<Partial<RootState>, Dispatch>([thunk]);

describe('Orders Action Cases', () => {
  it('Should fetch Orders with two dispatch, with our dummy data', async () => {
    const store = mockStore({});
    await store.dispatch(fetchOrders());
    const actions: OrdersActionType[] = store.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toEqual('FETCH_ORDERS_START');
    expect(actions[1]).toEqual({
      type: 'FETCH_ORDERS_SUCCESS',
      payload: mockOrders,
    });
  });

  it('Should fetch single Orders with two dispatch, with our dummy data', async () => {
    const store = mockStore({});
    await store.dispatch(fetchOrder('1'));
    const actions: OrdersActionType[] = store.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toEqual('FETCH_SINGLE_ORDER_START');
    expect(actions[1]).toEqual({
      type: 'FETCH_SINGLE_ORDER_SUCCESS',
      payload: mockOrders[0],
    });
  });

  it('Should fetch single Orders with FETCH_SINGLE_ORDER_FAILED', async () => {
    const store = mockStore({});
    await store.dispatch(fetchOrder('5'));
    const actions: OrdersActionType[] = store.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toEqual('FETCH_SINGLE_ORDER_START');
    expect(actions[1]).toEqual({
      type: 'FETCH_SINGLE_ORDER_FAILED',
      payload: 'Cannot Find Order !',
    });
  });

  it('Should addProductToOrder with ADD_NEW_PRODUCT_TO_ORDER', async () => {
    const state: Partial<RootState> = {
      OrdersReducer: {
        orders: [...mockOrders], // I used here the orders of dummy date =)
        loading: false,
        singleOrder: {
          order: {
            id: '',
            'customer-id': '',
            total: '',
            items: [],
          },
          loading: false,
          error: '',
        },
      },
    };
    const store = mockStore(state);
    await store.dispatch(addProductToOrder('B101'));
    const actions: OrdersActionType[] = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_NEW_PRODUCT_TO_ORDER',
      payload: {
        id: 'B101',
        price: '5.99',
        category: '2',
        description: 'Basic on-off switch',
      },
    });
  });

  it('Should addProductToOrder with ADD_CURRENT_PRODUCT_TO_ORDER', async () => {
    const state: Partial<RootState> = {
      OrdersReducer: {
        orders: [...mockOrders], // I used here the orders of dummy date =)
        loading: false,
        singleOrder: {
          order: {
            id: '2',
            'customer-id': '2',
            items: [
              {
                'product-id': 'B102',
                quantity: '5',
                'unit-price': '4.99',
                total: '24.95',
              },
            ],
            total: '24.95',
          },
          loading: false,
          error: '',
        },
      },
    };
    const store = mockStore(state);
    await store.dispatch(addProductToOrder('B102'));
    const actions: OrdersActionType[] = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_CURRENT_PRODUCT_TO_ORDER',
      payload: {
        id: 'B102',
        price: '4.99',
        category: '2',
        description: 'Press button',
      },
    });
  });

  it('Should addProductToOrder with ADD_PRODUCT_TO_ORDER_FAILED', async () => {
    const state: Partial<RootState> = {
      OrdersReducer: {
        orders: [...mockOrders], // I used here the orders of dummy date =)
        loading: false,
        singleOrder: {
          order: {
            id: '',
            'customer-id': '',
            total: '',
            items: [],
          },
          loading: false,
          error: '',
        },
      },
    };
    const store = mockStore(state);
    await store.dispatch(addProductToOrder('B107')); // Product doesn't exist =)
    const actions: OrdersActionType[] = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_PRODUCT_TO_ORDER_FAILED',
      payload: 'Product Not Found !',
    });
  });

  it('Should removeProductFromItem with REMOVE_ONE_PRODUCT_FROM_ORDER', async () => {
    const state: Partial<RootState> = {
      OrdersReducer: {
        orders: [...mockOrders], // I used here the orders of dummy date =)
        loading: false,
        singleOrder: {
          order: {
            id: '2',
            'customer-id': '2',
            items: [
              {
                'product-id': 'B102',
                quantity: '5',
                'unit-price': '4.99',
                total: '24.95',
              },
            ],
            total: '24.95',
          },
          loading: false,
          error: '',
        },
      },
    };
    const store = mockStore(state);
    await store.dispatch(removeProductFromItem('B102', '4.99', false));
    const actions: OrdersActionType[] = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_ONE_PRODUCT_FROM_ORDER',
      payload: {
        productID: 'B102',
        unitPrice: '4.99',
      },
    });
  });

  it('Should removeProductFromItem with REMOVE_ONE_PRODUCT_FROM_ORDER', async () => {
    const state: Partial<RootState> = {
      OrdersReducer: {
        orders: [...mockOrders], // I used here the orders of dummy date =)
        loading: false,
        singleOrder: {
          order: {
            id: '2',
            'customer-id': '2',
            items: [
              {
                'product-id': 'B102',
                quantity: '5',
                'unit-price': '4.99',
                total: '24.95',
              },
            ],
            total: '24.95',
          },
          loading: false,
          error: '',
        },
      },
    };
    const store = mockStore(state);
    await store.dispatch(removeProductFromItem('B102', '4.99', false));
    const actions: OrdersActionType[] = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_ONE_PRODUCT_FROM_ORDER',
      payload: {
        productID: 'B102',
        unitPrice: '4.99',
      },
    });
  });

  it('Should removeProductFromItem with REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER', async () => {
    const state: Partial<RootState> = {
      OrdersReducer: {
        orders: [...mockOrders],
        loading: false,
        singleOrder: {
          order: {
            id: '2',
            'customer-id': '2',
            items: [
              {
                'product-id': 'B102',
                quantity: '5',
                'unit-price': '4.99',
                total: '24.95',
              },
            ],
            total: '24.95',
          },
          loading: false,
          error: '',
        },
      },
    };
    const store = mockStore(state);
    await store.dispatch(removeProductFromItem('B102', '4.99', true));
    const actions: OrdersActionType[] = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER',
      payload: {
        productID: 'B102',
        productQuantity: '5',
        unitPrice: '4.99',
      },
    });
  });

  it('Should removeProductFromItem with REMOVE_PRODUCT_FROM_ORDER_FAILED when product isn\t exist in order', async () => {
    const state: Partial<RootState> = {
      OrdersReducer: {
        orders: [...mockOrders], // I used here the orders of dummy date =)
        loading: false,
        singleOrder: {
          order: {
            id: '2',
            'customer-id': '2',
            items: [
              {
                'product-id': 'B102',
                quantity: '5',
                'unit-price': '4.99',
                total: '24.95',
              },
            ],
            total: '24.95',
          },
          loading: false,
          error: '',
        },
      },
    };
    const store = mockStore(state);
    await store.dispatch(removeProductFromItem('B103', '4.99', true)); // Product isn't exist in order
    const actions: OrdersActionType[] = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_PRODUCT_FROM_ORDER_FAILED',
      payload: 'Product doesnt exist',
    });
  });

  it('Should handle PLACE_ORDER_SUCCESS', async () => {
    const orderToPlace: Order = {
      id: '2',
      'customer-id': '2',
      items: [
        {
          'product-id': 'B102',
          quantity: '5',
          'unit-price': '4.99',
          total: '24.95',
        },
      ],
      total: '24.95',
    };
    const state: Partial<RootState> = {
      OrdersReducer: {
        orders: [...mockOrders], // I used here the orders of dummy date =)
        loading: false,
        singleOrder: {
          order: orderToPlace,
          loading: false,
          error: '',
        },
      },
    };
    const store = mockStore(state);
    await store.dispatch(placeOrder(orderToPlace)); // Product isn't exist in order
    const actions: OrdersActionType[] = store.getActions();
    expect(actions[0]).toEqual({
      type: 'PLACE_ORDER_SUCCESS',
    });
  });

  it('Should handle PLACE_ORDER_FAILED', async () => {
    const orderToPlace: Order = {
      id: '2',
      'customer-id': '3',
      items: [
        {
          'product-id': 'B102',
          quantity: '5',
          'unit-price': '4.99',
          total: '24.95',
        },
      ],
      total: '24.95',
    };
    const state: Partial<RootState> = {
      OrdersReducer: {
        orders: [...mockOrders], // I used here the orders of dummy date =)
        loading: false,
        singleOrder: {
          order: orderToPlace,
          loading: false,
          error: '',
        },
      },
    };
    const store = mockStore(state);
    await store.dispatch(placeOrder(orderToPlace)); // Product isn't exist in order
    const actions: OrdersActionType[] = store.getActions();
    expect(actions[0]).toEqual({
      type: 'PLACE_ORDER_FAILED',
    });
  });
});
