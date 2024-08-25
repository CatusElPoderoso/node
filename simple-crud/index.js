
// SERVIDOR CON EXPRESS
const express = require('express');
const app = express();


// SETTINGS
//  --establecemos el puerto en el que se aloja la aplicacion
app.set('port', 8080);
//  --nombre de la aplicacion
const app_name = 'simple-crud';


// LISTENING SERVER
app.listen (app.get('port'), () => {
    console.log('http://localhost:'+app.get('port')+'/'+app_name);
})  //  --el servidor escucha en el puerto 8080

app.get('/'+app_name, (req, res) => {
    res.send('Hello cacacacac');
})