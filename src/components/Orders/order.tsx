import React from 'react';
import { Link } from 'react-router-dom';
import { Order } from '@/types/ordersTypes';
import './styles.css';

export type OrderListType = {
  order: Order;
};

function OrderItem({ order }: OrderListType) {
  return (
    <div className="orders-list-item">
      <p className="order-list-item-info">
        <span>
          ORDER ID:
        </span>
        <span className="order-list-item-info-details">
          {order.id}
        </span>
      </p>
      <Link to={`/orders/${order.id}`} className="readmore">View Details</Link>
    </div>
  );
}

export default OrderItem;
