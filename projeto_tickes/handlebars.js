const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}))
    app.set('view engine','handlebars');
//Conexão com o banco de dados MySql
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('projeto_chamado','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
//Rotas
        app.get('/cad',function(req,res){
            res.render('formulario')
        })

app.listen(8081, function(){
    console.log("Servidor rodado na url http://localhost:8081");

});