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

export type OrdersState = {
  orders: Order[];
  loading: boolean;
  signleOrder: Order,
};
