import { Customer } from '@/types/customers';
import customers from './jsonFiles/customers.json';
// Fake timeout
const timeOut: number = 1000;

export const getCustomers = () => new Promise<{ customers: Customer[] }>((resolve) => {
  setTimeout(() => {
    resolve({ customers });
  }, timeOut);
});

export const getCustomer = (id: string) => new Promise<Customer>((resolve, reject) => {
  setTimeout(() => {
    const customer = customers.find((cus) => cus.id === id);
    if (customer) {
      resolve(customer);
    } else {
      reject(new Error('Error in fetching customer'));
    }
  }, timeOut);
});
