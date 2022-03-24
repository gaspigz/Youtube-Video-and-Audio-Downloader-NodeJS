const express = require('express');
const router = express.Router(); //EL ENCARGADO DE CREAR LAS RUTAS

router.get('/',(req, res) => {
    //res.sendFile(__dirname + '/views/login.html'); //LO MANDA AL ARCHIVO login.html LA RUTA DEBE SER ABSOLUTA __dirname es el lugar desde donde se ejecuta
    // ASI LO ENVIARIAMOS SIN EJS // res.sendFile(path.join(__dirname, 'views/login.html')); //UNE AL DIRNAME CON EL LOGIN PERO NO DEPENDE DEL SO
    //EL ARCHIVO DEJA DE SER HTML Y ES EJS PARA QUE SEA PROCESADO POR EJS
    res.render('index.html'); 
})//A LA DIRECCION RAIZ LO MANDA A TAL LUGAR

router.get('/index',(req, res) => {
    res.render('index.html');
    
})

router.get('/audio',(req, res) => {
    res.render('indexaudio.html');
    
})

module.exports = router;