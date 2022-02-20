import { Product } from '@/types/productsTypes';
import products from './jsonFiles/products.json';

// Fake timeout
const timeOut: number = 1000;

export const fetchProducts = () => new Promise<Product[]>((resolve, reject) => {
  setTimeout(() => {
    // This is just a fake value, just to see how handle error work =)
    // So if want to test an error in API, change it to false
    const withoutError = true;
    if (withoutError) {
      resolve(products);
    } else {
      reject(new Error('Error in fetching products'));
    }
  }, timeOut);
});
