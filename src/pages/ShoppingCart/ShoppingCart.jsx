import React from "react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const { cart } = useSelector((state) => state.mainPageSlice);

  return (
    <div>
      {cart.map((e) => (
        <div key={e.id}>
          <h2>{e.name}</h2>
          <span>{e.price}</span>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
