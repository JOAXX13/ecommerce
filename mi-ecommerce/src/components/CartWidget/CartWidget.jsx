import React from "react";

const CartWidget = ({ cantidad }) => {
  return (
    <div className="cart-widget">
      <span>Carrito ({cantidad})</span> {/* Muestra la cantidad de productos */}
    </div>
  );
};

export default CartWidget;
