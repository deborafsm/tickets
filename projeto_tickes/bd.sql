CREATE TABLE atendentes (
    
    id INTEGER PRIMARY KEY, 
    nome varchar(50), 
    email varchar(50), 
    senha varchar(20), 
    permissao varchar(20) 
);

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
    }
     prioridade:{
        type: Sequelize.STRING
    }
    atendente:{
        type: Sequelize.STRING
    }
    data_hora:{
        type: Sequelize.DATE
    }
    status_chamado:{
        type: Sequelize.STRING
    }
    situacao,{
        type:Sequelize.STRING
    }
})


chamado.sync({force: true})

