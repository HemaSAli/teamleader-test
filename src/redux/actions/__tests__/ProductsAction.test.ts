import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@/redux/reducers';
// NOTE: I Import Here the dummy data just to use it in mock reducer
import mockProducts from '@/api/jsonFiles/products.json';
import { ProductsActionTypes } from '@/redux/actionTypes/products';
import * as productsActionAPI from '@/api/products';
import { fetchProducts } from '../productsAction';

type Dispatch = ThunkDispatch<RootState, undefined, ProductsActionTypes>;
const mockStore = configureStore<Partial<RootState>, Dispatch>([thunk]);

describe('Products Action Cases', () => {
  it('Should fetch Products with two dispatch, with our dummy data', async () => {
    const store = mockStore({});
    await store.dispatch(fetchProducts());
    const actions: ProductsActionTypes[] = store.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toEqual('FETCH_PRODUCTS_START');
    expect(actions[1]).toEqual({
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: mockProducts,
    });
  });

  it('Should fetch Products with error', async () => {
    const store = mockStore({});
    jest.spyOn(productsActionAPI, 'fetchProducts').mockRejectedValueOnce(new Error('Error in fetching products'));
    await store.dispatch(fetchProducts());
    const actions: ProductsActionTypes[] = store.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toEqual('FETCH_PRODUCTS_START');
    expect(actions[1]).toEqual({
      type: 'FETCH_PRODUCTS_FAILED',
      payload: 'Error in fetching products',
    });
  });
});
