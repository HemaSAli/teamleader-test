import { combineReducers } from 'redux';
import { OrdersReducer } from './ordersReducer';
import { productsReducer } from './productsReducer';

const reducers = combineReducers({
  OrdersReducer,
  productsReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
