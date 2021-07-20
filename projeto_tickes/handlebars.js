const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}))
    app.set('view engine','handlebars');

app.listen(8081, function(){
    console.log("Servidor rodado na url https://localhost:8081");

});
//Conexão com o banco de dados MySql
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('projeto_chamado','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
