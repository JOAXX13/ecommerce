import React from "react";

const Contacto = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contacto</h1>
      <p>¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte!</p>
      <form style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;