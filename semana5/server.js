const express = require('express');
const app = express();

// Middleware necesario para que el servidor entienda datos en formato JSON
app.use(express.json());

// 1. Ruta Principal (GET /) - Pregunta 6
app.get('/', (req, res) => {
    res.send('Servidor activo');
});

// 2. Ruta de Saludo (GET /saludo) - Pregunta 6
app.get('/saludo', (req, res) => {
    res.send('Hola comunidad');
});

// 3. Ruta con Parámetro Dinámico (GET /mensaje/:nombre) - Pregunta 6
app.get('/mensaje/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`Hola ${nombre}`);
});

// 4. Ruta de Envío de Reportes (POST /reporte) - Pregunta 8
app.post('/reporte', (req, res) => {
    const mensaje = req.body.mensaje;
    res.json({
        estado: "Reporte recibido",
        mensaje: mensaje
    });
});

// Configuración del puerto de escucha
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});