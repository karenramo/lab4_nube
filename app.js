const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express en Docker!');
});

// Ruta de clientes
app.get('/clientes', (req, res) => {
  // Aquí deberías obtener y enviar información sobre 3 clientes
  res.send('Lista de clientes');
});

// Ruta de productos
app.get('/productos', (req, res) => {
  // Aquí deberías obtener y enviar información sobre 3 productos
  res.send('Lista de productos');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`La aplicación está escuchando en el puerto ${PORT}`);
});
