/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchProducts } from '@/redux/actions/productsAction';
import Product from './product';
import './style.css';

export type ProductsPopup = {
  visible: boolean;
  onCancel: () => void;
}
function Products({ visible, onCancel } : ProductsPopup) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const {
    productsReducer: { products, loading, error },
  } = useAppSelector((state) => state);

  const isError = !loading && error;
  const isSuccess = !loading && !error;

  return (
    <Modal
      isOpen={visible}
      contentLabel="Example Modal"
      overlayClassName="teamleader-modal-overlay"
      className="teamleader-modal"
      ariaHideApp={false}
    >
      <div className="teamleader-modal-content">
        <button className="close-modal" onClick={onCancel}>X</button>
        {loading && <p className="loading"> Loading ...</p>}
        {isError && <p className="loading">{error}</p>}
        {isSuccess && products.map((product) => (
          <Product key={product.id} product={product} />))}
      </div>
    </Modal>
  );
}

export default Products;
