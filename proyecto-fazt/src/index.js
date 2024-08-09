//  --creamos el servidor con express
const express = require('express');
//  --donde la constate app es el servidor
const app = express();
//  --ruta absoluta del archivo index.js
const path = require('path');

// SETTINGS
//  --establecemos el puerto en el que se aloja la aplicacion
app.set('port', 8080);
//  --motor de plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARES

// ROUTES
// http://localhost:8080/proyecto-fazt
app.use(require('./routes/index'));

// STATIC FILES

// LISTENING SERVER
app.listen (app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
})  //  --el servidor escucha en el puerto 8080