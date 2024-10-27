import React from 'react';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <ul className="nav-list">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#Cursos">Productos</a></li>
        <li><a href="#Carreras">Nosotros</a></li>
        <li><a href="#Contacto">Contacto</a></li>
      </ul>
      <div className="navbar-cart">
        <CartWidget cartCount={cartCount} />
      </div>
    </nav>
  );
};

export default NavBar;
