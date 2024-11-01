import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import './app.css';import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <NavBar cartCount={cartCount} />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={addToCart}>Añadir al carrito</button>
      </div>
      <div>
      <ItemListContainer mensaje="Proximamente tienda de pasteleria"/>
      </div>
    </div>
  );
}

export default App;
