import { combineReducers } from 'redux';
import { OrdersReducer } from './ordersReducer';

const reducers = combineReducers({
  OrdersReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
