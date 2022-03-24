const express = require('express');
const router = express.Router(); //EL ENCARGADO DE CREAR LAS RUTAS
//const downloadsFolder = require('downloads-folder');
const path = require('path');
const fs = require('fs')
const ytdl = require('ytdl-core');

router.post('/video-url-upload', async (req, res)=>{
    var downloadFolder = path.join(process.env.USERPROFILE, "/Downloads/");
    console.log(downloadFolder);
    //console.log(downloadsFolder());

    const url = req.body.urlsubida;
    if(url == ""){
        res.redirect('/');
    }else{
        let info = await (await ytdl.getInfo(url));
        nombre = info.videoDetails.title;
        /*let format = ytdl.chooseFormat(info.formats, { quality: '134' });
        console.log('Format found!', format);*/
        const nombre_archivo = nombre + '.mp4';
        console.log(nombre_archivo);
        ytdl(url,  {quality:"highestvideo",filter:"audioandvideo"}).pipe(fs.createWriteStream(downloadFolder + nombre_archivo));
    
        res.redirect('/');
    }
    
});

router.post('/audio-url-upload', async (req, res)=>{
    var downloadFolder = path.join(process.env.USERPROFILE, "/Downloads/");
    console.log(downloadFolder);
    //console.log(downloadsFolder());

    const url = req.body.urlsubida;
    if(url == ""){
        res.redirect('/audio');
    }else{
        let info = await (await ytdl.getInfo(url));
        nombre = info.videoDetails.title;
        
        const nombre_archivo = nombre + '.mp3';
        console.log(nombre_archivo);
        ytdl(url,  {quality:"highestaudio",filter:"audioonly"}).pipe(fs.createWriteStream(downloadFolder + nombre_archivo));
    
        res.redirect('/audio');
    }
    
});

module.exports = router;