/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchOrder } from '@/redux/actions/ordersAction';
import './style.css';

function SingleOrder() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOrder(id));
    }
  }, []);

  const {
    OrdersReducer: { singleOrder: { order, loading } },
  } = useAppSelector((state) => state);

  return (
    <div className="teamleader-container">
      {loading && <h3>Loading ...</h3>}
      {order && (
        <div className="signle-order-container">
          <h2>Details of Order: <span className="red">{order?.id}</span></h2>
          <h2>with total: <span className="red">{order?.total}</span></h2>
          <div className="single-order-items">
            {order?.items.map((item) => (
              <div className="signle-order-item">
                <p className="signle-order-info">
                  Product ID: <span className="red">{item['product-id']}</span>
                </p>
                <p className="signle-order-info">
                  Quantity: <span className="red">{item.quantity}</span>
                </p>
                <p className="signle-order-info">
                  Unit Price: <span className="red">{item['unit-price']}</span>
                </p>
                <p className="signle-order-info">
                  Total: <span className="red">{item.total}</span>
                </p>
                <span className="remove">Remove</span>
              </div>
            ))}
          </div>
          <Link to="/orders">Back</Link>
        </div>
      )}
    </div>
  );
}

export default SingleOrder;
