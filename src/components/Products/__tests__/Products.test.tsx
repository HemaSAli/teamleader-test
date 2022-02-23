import React from 'react';
import { render } from '@/testUtils';
import mockProducts from '@/api/jsonFiles/products.json';
import { RootState } from '@/redux/reducers';
import Products from '..';

describe('Products Page Render Cases', () => {
  it('Should render Products with Loading', () => {
    const state: Partial<RootState> = {
      productsReducer: {
        products: [],
        loading: true,
        error: '',
      },
    };
    const onCancel = jest.fn();
    const component = render(<Products visible onCancel={onCancel} />, state);
    expect(component.queryByText(/Loading/i)).toBeInTheDocument();
  });

  it('Should render Products with products', () => {
    const state: Partial<RootState> = {
      productsReducer: {
        products: mockProducts,
        loading: false,
        error: '',
      },
    };
    const onCancel = jest.fn();
    const component = render(<Products visible onCancel={onCancel} />, state);
    expect(component.queryAllByText(/Product ID:/i)).toHaveLength(5);
  });

  it('Should render Products with error', () => {
    const state: Partial<RootState> = {
      productsReducer: {
        products: [],
        loading: false,
        error: 'Failed in fetching products !',
      },
    };
    const onCancel = jest.fn();
    const component = render(<Products visible onCancel={onCancel} />, state);
    expect(component.queryByText(/Failed in fetching products !/i)).toBeInTheDocument();
  });
});
