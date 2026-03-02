const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

//Activar CORS
app.use(cors());

// Esto es un "endpoint" o ruta. 
// Cuando alguien visite la raíz de nuestra web, le responderemos esto.
app.get('/', (req, res) => {
  res.send('¡Hola! Estoy haciendo pruebas con ramas en Git.');
});

// Otra ruta para probar que podemos tener varias (como páginas en PHP)
app.get('/api/datos', (req, res) => {
  res.json({
    mensaje: "Esto es un objeto JSON",
    estado: "Funcionando",
    tecnologias: ["Node.js", "Express", "Docker"]
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});