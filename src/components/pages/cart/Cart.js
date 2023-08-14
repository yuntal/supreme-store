import React, { useContext } from "react";
import { ShopContext } from "../../../context/Shop-context";
import { PRODUCTS } from "../../../Products";
import { SupremeItems } from "../cart/CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1 className="cart-item">Your Items:</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <SupremeItems key={product.id} data={product} />;
          }
          return null; 
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="total"> Total: ${totalAmount} </p>
          <button className="continue" onClick={() => navigate("/")}> Keep Shopping </button>
          <button className="checkout" onClick={() => { checkout(); navigate('/cart'); }}>{" "}Checkout{" "}</button>
        </div>
      ) : (
        <h1 className="empty"> Your shopping cart is empty...</h1>
      )}
    </div>
  );
};
