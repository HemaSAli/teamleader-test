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
  order: Order | undefined,
  loading: boolean,
  error: boolean,
}
export type OrdersState = {
  orders: Order[];
  loading: boolean;
  singleOrder: SingleOrder;
};
