// 1. Importamos la librería Express que instalamos previamente
const express = require('express');

// 2. Creamos una aplicación de Express (nuestro servidor de pruebas)
const app = express();

// 3. Definimos la ruta principal (cuando entramos a la dirección básica)
app.get('/', (req, res) => {
    // El servidor envía este mensaje de respuesta al navegador del usuario
    res.send('Servidor funcionando correctamente');
});

// 4. Le decimos al servidor en qué "puerto" de la computadora debe escuchar
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});
