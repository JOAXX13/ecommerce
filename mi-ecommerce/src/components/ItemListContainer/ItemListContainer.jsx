import React, { useState, useEffect } from 'react';
import { getProductosByCategoria } from '../API/productos'; // Esta función debería obtener los productos según la categoría

const ItemListContainer = ({ categoria }) => {
  const [productos, setProductos] = useState([]); // Estado para los productos

  // UseEffect para cargar los productos cuando cambie la categoría
  useEffect(() => {
    if (categoria) {
      // Si hay categoría, obtenemos los productos correspondientes
      getProductosByCategoria(categoria).then((data) => setProductos(data));
    } else {
      // Si no hay categoría, podemos mostrar todos los productos o dejar vacío
      setProductos([]); 
    }
  }, [categoria]); // Dependencia de categoría para recargar los productos

  return (
    <div>
      {categoria && <h1>Productos en la categoría: {categoria}</h1>}
      {productos.length > 0 ? (
        productos.map((producto) => (
          <div key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad disponible: {producto.cantidad}</p>
            {/* Agrega más detalles según tus necesidades */}
          </div>
        ))
      ) : (
        categoria && <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
