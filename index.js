const express = require('express');
const path = require('path');
const app = express(); //CREAMOS EL SERVIDOR EN EL OBJETO app 
var bodyParser = require('body-parser');

// Settings
app.set('port', 3000); //LE DAMOS A LA VARIABLE PORT DE app EL PUERTO 3000
// CON app.get('port) OBTENGO 3000

app.set('view engine', 'ejs'); //ES PARA DECIRLE QUE MOTOR DE PLANTILLA VAMOS A USAR (ejs)

app.engine('html', require('ejs').renderFile); //HACEMOS QUE TODOS LOS HTML SE RENDERICEN CON EJS
app.engine('php', require('ejs').renderFile);

app.set('views', path.join(__dirname, 'views')); //LE DECIMOS DONDE ESTA LA CARPETA VIEWS

app.use(express.json());
app.use(express.urlencoded());

app.use(require('./routes/index'));
app.use('/links',require('./routes/links.js')); //SE ACCEDE A LOS LINKS CON /links
//Parsear el body usando body parser


//Public
//Static files
var publicPath = path.join(__dirname, 'public'); //SE CREA LA RUTA DONDE ESTÁN LOS STATIC FILES (css, js, etc)
console.log(publicPath);
app.use(express.static(publicPath)); //LE DOY LA CARPETA PUBLIC AL MODULO STATIC DE EXPRESS

//Listening to the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})


