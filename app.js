const express = require('express');
const app = express();

const PORT = 3000;

// RUTA DE INICIO
app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos a Beer</h1><p>Un mundo de sabores y tradición.</p>');
});

// RUTA HISTORIA
app.get('/historia', (req, res) => {
    res.send('<h1>Nuestra historia</h1><p>Conocé los orígenes del mundo cervecero.</p>');
});

// RUTA NOSOTROS
app.get('/nosotros', (req, res) => {
    res.send('<h1>Conocé Beer</h1><p>Compartimos nuestra pasión por la cerveza.</p>');
});

// RUTA NOVEDADES
app.get('/novedades', (req, res) => {
    res.send('<h1>Actualidad Beer</h1><p>Descubrí todas las novedades cerveceras.</p>');
});

// RUTA PRODUCTOS
app.get('/productos', (req, res) => {
    res.send('<h1>Nuestros productos</h1><p>Conocé nuestras variedades de cerveza.</p>');
});

// RUTA EXPERIENCIAS
app.get('/experiencias', (req, res) => {
    res.send('<h1>Experiencias Beer</h1><p>Momentos y encuentros para compartir.</p>');
});

// RUTA UBICACION
app.get('/ubicacion', (req, res) => {
    res.send('<h1>Ubicación</h1><p>Encontranos en Buenos Aires.</p>');
});

// RUTA CONTACTO
app.get('/contacto', (req, res) => {
    res.send('<h1>Contacto</h1><p>Comunicate con nosotros.</p>');
});

// INICIAR SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});