export type OrderProduct = {
  'product-id': string;
  quantity: string;
  'unit-price': string;
  total: string;
};

export type Order = {
  id: string;
  'customer-id': string;
  total: string;
  items: OrderProduct[];
};

export type SingleOrder = {
  order: Order,
  loading: boolean,
  error: string,
};

export type OrdersState = {
  orders: Order[];
  loading: boolean;
  singleOrder: SingleOrder;
};
