import { Product } from '@/types/productsTypes';
import products from './jsonFiles/products.json';

const timeOut:number = 2000;

export const fetchProducts = () => new Promise<{ products: Product[] }>((resolve) => {
  setTimeout(() => {
    resolve({ products });
  }, timeOut);
});
