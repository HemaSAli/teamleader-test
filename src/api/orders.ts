import { Order } from '@/types/ordersTypes';
import orders from './jsonFiles/orders.json';

const timeOut:number = 2000;

export const fetchOrders = () => new Promise<{ orders: Order[] }>((resolve) => {
  setTimeout(() => {
    resolve({ orders });
  }, timeOut);
});

export const fetchOrder = (orderID: string) => new Promise<{ selectedOrder: Order | undefined}>((resolve) => {
  setTimeout(() => {
    const selectedOrder = orders.find((orderItem) => orderItem.id === orderID);
    resolve({ selectedOrder });
  }, timeOut);
});
