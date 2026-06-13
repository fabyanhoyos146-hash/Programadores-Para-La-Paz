// 1. Importamos Express
const express = require('express');
const app = express();

// 2. Activamos el middleware para entender datos en formato JSON
app.use(express.json());

// 3. Array en memoria (nuestra base de datos temporal)
let reportes = [];

// 4. Ruta GET para consultar todos los reportes existentes
app.get('/reportes', (req, res) => {
    res.json(reportes);
});

// 5. Ruta POST para registrar un nuevo reporte
app.post('/reportes', (req, res) => {
    // Creamos el nuevo reporte estructurado como un objeto de JS {}
    const reporte = {
        id: reportes.length + 1, // Autoincrementa el ID según la cantidad de reportes
        tipo: req.body.tipo,
        descripcion: req.body.descripcion
    };

    // Agregamos el reporte a nuestra lista
    reportes.push(reporte);

    // Respondemos confirmando el registro exitoso
    res.json({
        mensaje: "Reporte registrado",
        reporte: reporte
    });
});

// 6. Encendemos el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});