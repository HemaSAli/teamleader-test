/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Product } from '@/types/productsTypes';
import { useAppDispatch } from '@/redux/hooks';
import { addProductToOrder } from '@/redux/actions/ordersAction';
import './style.css';

export type SingleProductProps = {
  product: Product;
};
function SingleProduct({ product }: SingleProductProps) {
  const dispatch = useAppDispatch();

  const { 'product-id': productID, 'unit-price': unitPrice } = product;
  return (
    <div className="single-product">
      <p>
        Product ID: <span className="product-details">{productID}</span>
      </p>
      <p>
        Unit Price: <span className="product-details">{unitPrice}</span>
      </p>
      <button
        onClick={() => { dispatch(addProductToOrder(product['product-id'])); }}
      >
        Add Product
      </button>
    </div>
  );
}

export default SingleProduct;
