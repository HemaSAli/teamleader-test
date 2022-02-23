import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchOrders } from '@/redux/actions/ordersAction';
import { Order } from '@/types/ordersTypes';
import OrderItem from './order';

import './styles.css';

function OrdersList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const {
    OrdersReducer: { loading, orders },
  } = useAppSelector((state) => state);

  if (loading) {
    return (
      <div className="teamleader-container">
        <h3>Loading ...</h3>
      </div>
    );
  }

  return (
    <div className="teamleader-container">
      <div className="orders-list">
        <h3 className="orders-list-title">Orders List</h3>
        <div className="orders-list-items">
          {orders.map((order: Order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersList;
