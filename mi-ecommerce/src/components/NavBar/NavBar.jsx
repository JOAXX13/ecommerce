import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productos } from "../API/productos"; // Productos con categorías
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const NavBar = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  // Extrae las categorías únicas de los productos
  const categorias = [...new Set(productos.map((producto) => producto.categoria))];

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria); // Cambia la categoría seleccionada
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <Logo />
          <li><Link to="/">Inicio</Link></li>
          
          <li className="dropdown">
            <Link to="/productos">Productos</Link>
            <ul className="dropdown-menu">
              {categorias.map((categoria) => (
                <li key={categoria}>
                  <a href="#!" onClick={() => handleCategoriaClick(categoria)}>
                    {categoria}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        <CartWidget cantidad={0} /> {/* Widget del carrito */}
      </nav>

      {/* Muestra los productos filtrados por la categoría seleccionada */}
      <ItemListContainer categoria={categoriaSeleccionada} />
    </>
  );
};

export default NavBar;
