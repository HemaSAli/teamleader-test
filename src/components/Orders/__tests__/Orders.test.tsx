import React from 'react';
import { render } from '@/testUtils';
import mockOrders from '@/api/jsonFiles/orders.json';
import Orders from '..';

describe('Orders Page Render Cases', () => {
  it('Should render HomePage with Loading', () => {
    const state = {
      OrdersReducer: {
        orders: [],
        loading: true,
        singleOrder: {
          order: {
            id: '', 'customer-id': '', total: '', items: [],
          },
          loading: true,
          error: '',
        },
      },
    };
    const component = render(<Orders />, state);
    expect(component.queryByText(/Loading/i)).toBeInTheDocument();
  });

  it('Should render HomePage with orders list', () => {
    const state = {
      OrdersReducer: {
        orders: [...mockOrders], // I used here the orders of dummy date =)
        loading: false,
        singleOrder: {
          order: {
            id: '', 'customer-id': '', total: '', items: [],
          },
          loading: false,
          error: '',
        },
      },
    };
    const component = render(<Orders />, state);
    expect(component.queryAllByText(/View Details/i)).toHaveLength(3);
  });
});
