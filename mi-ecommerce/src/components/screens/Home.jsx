import React from "react";
import TituloH1 from "../Titulos/TituloH1";

const Home = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <TituloH1 h1="Bienvenidos a los mejores Productos de Pastelería" />
    
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Nos encanta endulzar tu vida con nuestras creaciones únicas. Explora nuestros productos, selecciona tus favoritos y déjate sorprender por nuestros sabores.
      </p>

      <p style={{ fontSize: "16px", marginTop: "10px" }}>
        ¿Listo para probar algo delicioso? Haz clic en <strong>Productos</strong> en el menú para descubrir todas nuestras opciones.
      </p>
    </div>
  );
};

export default Home;
