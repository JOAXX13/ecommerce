import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CartWidget = ({ cartCount }) => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i> {/* Ícono de carrito */}
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* Contador */}
    </div>
  );
};

export default CartWidget;
