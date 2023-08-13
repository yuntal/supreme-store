import React, { useContext } from "react";
import { ShopContext } from "../../../context/Shop-context";

export const Product = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const ItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={image} className="image"/>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {ItemCount > 0 && <> ({ItemCount})</>}
      </button>
    </div>
  );
};