const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
const Post = require('./models/Post')
const Chamados = require('./models/Chamado')//Config
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
            //res.render('formulario')
            res.render('novo_chamado')
            
        })
        app.post('/novo_chamado',function(req,res){
            Chamados.create({
                protocolo:req.body.protocolo,
                assunto:req.body.assunto,
                departamento:req.body.departamento,
                cliente:req.body.cliente,
                categoria:req.body.categoria,
                data_chamado:req.body.data_chamado,
                status:req.body.status,
                situacao:req.body.situacao,
                atendente:req.body.atendente,
                mensagem:req.body.mensagem                
            }).then(function(){
                res.send("Chamado Criado com sucesso!")
            }).catch(function(erro){
                res.send("Houve um erro "+erro)
            })
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