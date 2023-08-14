import React from 'react';
import { PRODUCTS } from '../../../Products';
import { Product } from './Product';
import { Image } from 'react-bootstrap';

export const SupremeShop = () => {
  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <Image className="cover" src="https://source.unsplash.com/9Z2oicCDsSc" fluid />
          <h1 className="header"> Autumn collection [2023]....</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};
