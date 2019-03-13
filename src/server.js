const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mailgun = require("mailgun-js");
require('dotenv').config();
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({apiKey: process.env.API_KEY, domain: DOMAIN});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/',function(req,res){
    if(!secret || secret !== process.env.SECRET) {
        throw new Error('Secret not provided or invalid secret')
    }
    console.log(req)
    var nombre = req.body.fullName || null;
    var telefono = req.body.phoneNumber || null;
    var cedula = req.body.idNumber || null;
    var tipoConsulta = req.body.tipoDeGestion || null;
    var email =req.body.email || null;
    var to = req.body.to || null;

    var data = {
        from: "Mailgun Sandbox <postmaster@sandbox3ad95a6b9af24a96880c57c18912e5ba.mailgun.org>",
        to: to,
        subject: "Conversion chatbot",
        html: `<table>
                <tr>
                    <td>Nombre</td>
                    <td>${nombre}</td>
                </tr>
                <tr>
                    <td>Telefono</td>
                    <td>${telefono}</td>
                </tr>
                <tr>
                    <td># de cedula</td>
                    <td>${cedula}</td>
                </tr>
                <tr>
                    <td>Emial</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td>Tipo de consulta</td>
                    <td>${tipoConsulta}</td>
                </tr>
                <Table>
                `
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
        console.log(error);
    });
  res.end("Mensaje enviado");
})

app.listen(process.env.PORT || 5000, function(){
  console.log("Started on PORT 3000");
})