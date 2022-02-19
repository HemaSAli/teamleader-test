import { Order } from '@/types/ordersTypes';
import orders from './orders.json';

const timeOut:number = 2000;

export const fetchOrders = () => new Promise<{ orders: Order[] }>((resolve) => {
  setTimeout(() => {
    resolve({ orders });
  }, timeOut);
});
