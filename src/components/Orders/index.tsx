import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchOrders } from '@/redux/actions/ordersAction';
import { Order } from '@/types/ordersTypes';
import OrderItem from './order';

import './styles.css';

function OrdersList() {
  const {
    OrdersReducer: { loading, orders },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="teamleader-container">
      {!loading
        ? (
          <div className="orders-list">
            <h3 className="orders-list-title">Orders List</h3>
            <div className="orders-list-items">
              {orders.map((order: Order) => (
                <OrderItem order={order} />
              ))}
            </div>
          </div>
        ) : <h3>Loading ...</h3>}
    </div>
  );
}

export default OrdersList;
