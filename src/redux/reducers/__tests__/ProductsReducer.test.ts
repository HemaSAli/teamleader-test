import mockProducts from '@/api/jsonFiles/products.json';
import {
  productsReducer,
  initialState as initialReducerState,
} from '../productsReducer';

describe('Product Reducer Cases', () => {
  it('Should handle FETCH_PRODUCTS_START', () => {
    expect(
      productsReducer(initialReducerState, {
        type: 'FETCH_PRODUCTS_START',
      }),
    ).toEqual({
      products: [],
      loading: true,
      error: null,
    });
  });

  it('Should handle FETCH_PRODUCTS_SUCCESS', () => {
    expect(
      productsReducer(initialReducerState, {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: mockProducts,
      }),
    ).toEqual({
      products: mockProducts,
      loading: false,
      error: null,
    });
  });

  it('Should handle FETCH_PRODUCTS_FAILED', () => {
    expect(
      productsReducer(initialReducerState, {
        type: 'FETCH_PRODUCTS_FAILED',
        payload: 'Error in fetching products',
      }),
    ).toEqual({
      products: [],
      loading: false,
      error: 'Error in fetching products',
    });
  });
});
