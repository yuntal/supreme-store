import React, { useContext } from "react";
import { ShopContext } from "../../../context/Shop-context";

export const SupremeItems= (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cart-Item">
      <img src={image} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="counter">
          <button onClick={() => removeFromCart(id)} className="remove"> - </button>
          <input value={cartItems[id]} onChange={(e) => (Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)} className="add"> + </button>
        </div>
      </div>
    </div>
  );
};