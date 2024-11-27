export const productos = [
    {
        "id": 1,
        "nombre": "Torta de Chocolate",
        "categoria": "Tortas",
        "descripcion": "Deliciosa torta de chocolate con relleno de ganache.",
        "costo": 2500.0
    },
    {
        "id": 2,
        "nombre": "Torta Red Velvet",
        "categoria": "Tortas",
        "descripcion": "Torta esponjosa con un toque de cacao y cobertura de queso crema.",
        "costo": 2700.0
    },
    {
        "id": 3,
        "nombre": "Medialunas de Manteca",
        "categoria": "Facturas",
        "descripcion": "Clásicas medialunas de manteca, suaves y dulces.",
        "costo": 150.0
    },
    {
        "id": 4,
        "nombre": "Criollos Salados",
        "categoria": "Criollos",
        "descripcion": "Sabrosos criollos crocantes ideales para acompañar mate.",
        "costo": 100.0
    },
    {
        "id": 5,
        "nombre": "Tarta de Frutillas",
        "categoria": "Tortas",
        "descripcion": "Base crocante de masa sablée con crema pastelera y frutillas frescas.",
        "costo": 3000.0
    },
    {
        "id": 6,
        "nombre": "Rosca de Pascua",
        "categoria": "Especialidades",
        "descripcion": "Rosca tradicional con crema pastelera y frutas abrillantadas.",
        "costo": 2000.0
    },
    {
        "id": 7,
        "nombre": "Bizcochitos de Grasa",
        "categoria": "Criollos",
        "descripcion": "Clásicos bizcochitos salados perfectos para cualquier momento.",
        "costo": 120.0
    },
    {
        "id": 8,
        "nombre": "Pastelitos de Membrillo",
        "categoria": "Facturas",
        "descripcion": "Pastelitos crujientes rellenos con dulce de membrillo.",
        "costo": 200.0
    },
    {
        "id": 9,
        "nombre": "Torta de Zanahoria",
        "categoria": "Tortas",
        "descripcion": "Torta húmeda de zanahoria con frosting de queso crema.",
        "costo": 2400.0
    },
    {
        "id": 10,
        "nombre": "Facturas Mixtas",
        "categoria": "Facturas",
        "descripcion": "Variedad de medialunas, cañoncitos y vigilantes.",
        "costo": 160.0
    }
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductosByCategoria = (categoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productosFiltrados = productos.filter((producto) => producto.categoria === categoria);
        resolve(productosFiltrados);
      }, 1000);
    });
};
