// 1. Importamos Express
const express = require('express');
const app = express();

// 2. Ruta principal (Home) que devuelve un texto simple
app.get('/', (req, res) => {
    res.send('Servidor activo y funcionando');
});

// 3. Ruta secundaria (/estado) que devuelve un JSON con información estructurada
app.get('/estado', (req, res) => {
    res.json({
        estado: "Servidor funcionando",
        servicio: "API comunitaria"
    });
});

// 4. Encendemos el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});