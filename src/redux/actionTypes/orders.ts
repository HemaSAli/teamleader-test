import { Order } from '@/types/ordersTypes';
import { Product } from '@/types/productsTypes';

export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_SINGLE_ORDER_START = 'FETCH_SINGLE_ORDER_START';
export const FETCH_SINGLE_ORDER_SUCCESS = 'FETCH_SINGLE_ORDER_SUCCESS';
export const FETCH_SINGLE_ORDER_FAILED = 'FETCH_SINGLE_ORDER_FAILED';

export const ADD_CURRENT_PRODUCT_TO_ORDER = 'ADD_CURRENT_PRODUCT_TO_ORDER';
export const ADD_NEW_PRODUCT_TO_ORDER = 'ADD_NEW_PRODUCT_TO_ORDER';
export const ADD_PRODUCT_TO_ORDER_FAILED = 'ADD_PRODUCT_TO_ORDER_FAILED';

export const REMOVE_ONE_PRODUCT_FROM_ORDER = 'REMOVE_ONE_PRODUCT_FROM_ORDER';
export const REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER = 'REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER';
export const REMOVE_PRODUCT_FROM_ORDER_FAILED = 'REMOVE_PRODUCT_FROM_ORDER_FAILED';

export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILED = 'PLACE_ORDER_FAILED';

export const RESET_SINGLE_ORDER = 'RESET_SINGLE_ORDER';

type ResetSingleOrder = {
  type: typeof RESET_SINGLE_ORDER;
};

type FetchOrdersStart = {
  type: typeof FETCH_ORDERS_START;
};

type FetchSingleOrdersStart = {
  type: typeof FETCH_SINGLE_ORDER_START;
};

type FetchOrdersSuccess = {
  type: typeof FETCH_ORDERS_SUCCESS;
  payload: Order[];
};

type FetchSingleOrderSuccess = {
  type: typeof FETCH_SINGLE_ORDER_SUCCESS;
  payload: Order;
};

type FetchSingleOrderFailed = {
  type: typeof FETCH_SINGLE_ORDER_FAILED;
  payload: string;
};

type AddCurrentProductToOrder = {
  type: typeof ADD_CURRENT_PRODUCT_TO_ORDER;
  payload: Product;
};
type AddNewProductToOrder = {
  type: typeof ADD_NEW_PRODUCT_TO_ORDER;
  payload: Product;
};

type AddProductToOrderFailed = {
  type: typeof ADD_PRODUCT_TO_ORDER_FAILED;
  payload: string;
};

type RemoveOneProductFromOrder = {
  type: typeof REMOVE_ONE_PRODUCT_FROM_ORDER;
  payload: {
    unitPrice: string,
    productID: string,
  };
};

type RemoveAllProductsQuantityFromOrder = {
  type: typeof REMOVE_ALL_PRODUCT_QUANTITY_FROM_ORDER;
  payload: {
    unitPrice: string,
    productID: string,
    productQuantity: string,
  };
};

type RemoveProductFromOrderFailed = {
  type: typeof REMOVE_PRODUCT_FROM_ORDER_FAILED;
  payload: string;
};

type PlaceOrderSucess = {
  type: typeof PLACE_ORDER_SUCCESS;
};

type PlaceOrderFailed = {
  type: typeof PLACE_ORDER_FAILED;
};

export type OrdersActionType =
  | FetchOrdersStart
  | FetchOrdersSuccess
  | FetchSingleOrdersStart
  | FetchSingleOrderSuccess
  | FetchSingleOrderFailed
  | AddCurrentProductToOrder
  | AddNewProductToOrder
  | AddProductToOrderFailed
  | RemoveOneProductFromOrder
  | RemoveProductFromOrderFailed
  | RemoveAllProductsQuantityFromOrder
  | PlaceOrderSucess
  | PlaceOrderFailed
  | ResetSingleOrder;
