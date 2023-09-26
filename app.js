const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/clientes', (req, res) => {
  const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  const productos = ['Producto 1', 'Producto 2', 'Producto 3'];
  res.json(productos);
});

app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});
