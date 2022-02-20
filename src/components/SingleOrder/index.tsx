/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchOrder, removeProductFromItem } from '@/redux/actions/ordersAction';
import Products from '@/components/Products';
import './style.css';

function SingleOrder() {
  const dispatch = useAppDispatch();
  const [addProductsModalVisible, setAddProductsModalVisible] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOrder(id));
    }
  }, []);

  const {
    OrdersReducer: { singleOrder: { order, loading, error } },
  } = useAppSelector((state) => state);

  const isFetchOrderSuccess = !loading && order.id;
  const isFetchOrderFailed = !loading && error;

  return (
    <>
      <div className="teamleader-container">
        {loading && <h3>Loading ...</h3>}
        {isFetchOrderFailed && <h3>{error}</h3>}
        {isFetchOrderSuccess && (
        <div className="signle-order-container">
          <h2>Details of Order: <span className="red">{order?.id}</span></h2>
          <h2>with total: <span className="red">{order?.total}</span></h2>
          <div className="single-order-items">
            {order?.items.map((item) => (
              <div key={item['product-id']} className="signle-order-item">
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

                <button
                  type="button"
                  className="remove"
                  onClick={() => { dispatch(removeProductFromItem(item['product-id'], item['unit-price'], false)); }}
                >Remove One
                </button>
                <button
                  type="button"
                  className="remove"
                  onClick={() => { dispatch(removeProductFromItem(item['product-id'], item['unit-price'], true)); }}
                >Remove All
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="add-products"
            onClick={() => setAddProductsModalVisible(true)}
          >
            Add More Products
          </button>
          <Link to="/orders">Back</Link>
        </div>
        )}
      </div>
      {/* What I did here is conditional rednder for popup,
       So I render the popup only if user want to add product */}
      {addProductsModalVisible && (
      <Products
        onCancel={() => setAddProductsModalVisible(false)}
        visible={addProductsModalVisible}
      />
      )}
    </>
  );
}

export default SingleOrder;
