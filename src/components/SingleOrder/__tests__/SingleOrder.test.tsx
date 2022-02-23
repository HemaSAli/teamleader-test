import React from 'react';
import { render } from '@/testUtils';
import mockOrders from '@/api/jsonFiles/orders.json';
import SingleOrder from '..';

describe('Single Order Page Render Cases', () => {
  it('Should render SingleOrder with Loading', () => {
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
    const { queryByText } = render(<SingleOrder />, state);
    expect(queryByText(/Loading/i)).toBeInTheDocument();
  });

  it('Should render SingleOrder with Order Details', () => {
    const state = {
      OrdersReducer: {
        orders: [...mockOrders], // I used here the orders of dummy date =)
        loading: false,
        singleOrder: {
          order: mockOrders[0],
          loading: false,
          error: '',
        },
      },
    };
    const { queryByText } = render(<SingleOrder />, state);
    expect(queryByText(/Details of Order:/i)).toBeInTheDocument();
    expect(queryByText(/loading/i)).not.toBeInTheDocument();
  });

  it('Should render SingleOrder with error', () => {
    const state = {
      OrdersReducer: {
        orders: [],
        loading: true,
        singleOrder: {
          order: {
            id: '', 'customer-id': '', total: '', items: [],
          },
          loading: false,
          error: 'Wrong Order ID',
        },
      },
    };
    const { queryByText } = render(<SingleOrder />, state);
    expect(queryByText(/Wrong Order ID/i)).toBeInTheDocument();
    expect(queryByText(/loading/i)).not.toBeInTheDocument();
  });
});
