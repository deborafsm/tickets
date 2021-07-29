const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const Post = require('./models/Post')
//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}))
    app.set('view engine','handlebars');
//Body Parser
    app.use(express.urlencoded({extended: false}));
    app.use(express.json())
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
        app.post('/postagens',function(req,res){
           Post.create({
            titulo:req.body.titulo,
            conteudo: req.body.conteudo
           }).then(function(){
               res.send("Post criado com sucesso!")
           }).catch(function(erro){
               res.send("Houve um erro "+erro)
           })
        })
       
app.listen(8081, function(){
    console.log("Servidor rodado na url http://localhost:8081");

});