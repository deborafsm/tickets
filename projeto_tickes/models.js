 // Example for sqlite

//Teste para saber se o bd está conectado.

/*sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
});*/

//Criar uma model de postagem (CRIA uma tabela no banco de dados, utilizando sequelize)

const postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

    
const atendentes = sequelize.define('atendentes',{
    atendente:{
        type: Sequelize.STRING
    },
    categoria:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    senha:{
        type: Sequelize.STRING
    },
    permissao:{
        type: Sequelize.STRING
    }
})


const chamado = sequelize.define('chamado',{
    protocolo:{
        type: Sequelize.INTEGER 
    },
    cliente:{
        type: Sequelize.STRING
    },
    departamento:{
        type: Sequelize.STRING
    },
    assunto:{
        type: Sequelize.STRING
    },
    mensagem:{
        type: Sequelize.TEXT
    },
     prioridade:{
        type: Sequelize.STRING
    },
    atendente:{
        type: Sequelize.STRING
    },
    data_hora:{
        type: Sequelize.DATE
    },
    status_chamado:{
        type: Sequelize.STRING
    },
    situacao:{
        type:Sequelize.STRING
    }
})
