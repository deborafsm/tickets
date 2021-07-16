const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('projeto_chamado','root','',{
    host: 'localhost',
    dialect: 'mysql'
}) // Example for sqlite


/*sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
});*/

//Criar uma model de postagem
const postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
}); 
postagem.sync({force:true}) 
    