/* eslint-disable implicit-arrow-linebreak */
import { Order } from '@/types/ordersTypes';
import { Product } from '@/types/productsTypes';
import orders from './jsonFiles/orders.json';
import products from './jsonFiles/products.json';

// Fake timeout
const timeOut: number = 1000;

export const fetchOrders = () =>
  new Promise<{ orders: Order[] }>((resolve) => {
    setTimeout(() => {
      resolve({ orders });
    }, timeOut);
  });

export const fetchOrder = (orderID: string) =>
  new Promise<Order>((resolve, reject) => {
    setTimeout(() => {
      const selectedOrder = orders.find(
        (orderItem) => orderItem.id === orderID,
      );
      if (selectedOrder) {
        resolve(selectedOrder);
      } else {
        reject(new Error('Cannot Find Order !'));
      }
    }, timeOut);
  });

export const addProductToOrder = (productID: string) =>
  new Promise<Product>(
    (resolve, reject) => {
      setTimeout(() => {
        const product = products.find(
          (productItem) => productItem['product-id'] === productID,
        );
        if (product) {
          resolve(product);
        } else {
          reject(new Error('Product Not Found !'));
        }
      }, 100);
    },
  );

export const removeProductFromOrder = (productID: string) =>
  new Promise<string>(
    (resolve, reject) => {
      setTimeout(() => {
        const withoutError = true;
        if (withoutError) {
          resolve(productID);
        } else {
          reject(new Error('Failed to Remove !'));
        }
      }, 100);
    },
  );
