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

  const {
    id: productID, price: unitPrice, category, description,
  } = product;
  return (
    <div className="single-product">
      <p>Product ID: <span className="product-details">{productID}</span></p>
      <p>category: <span className="product-details">{category}</span></p>
      <p>description: <span className="product-details">{description}</span></p>
      <p>Price: <span className="product-details">{unitPrice}</span></p>
      <button
        onClick={() => { dispatch(addProductToOrder(productID)); }}
      >
        Add Product
      </button>
    </div>
  );
}

export default SingleProduct;
