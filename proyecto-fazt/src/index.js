//  --creamos el servidor con express
const express = require('express');
//  --donde la constate app es el servidor
const app = express();

// SETTINGS
//  --establecemos el puerto en el que se aloja la aplicacion
app.set('port', 8080);

// MIDDLEWARES

// ROUTES

// STATIC FILES

// LISTENING SERVER
app.listen (app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
})  //  --el servidor escucha en el puerto 8080