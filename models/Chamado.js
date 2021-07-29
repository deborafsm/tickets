const db = require('./db')
const Chamados = db.sequelize.define('chamados',{
    protocolo:{
        type: db.Sequelize.INTEGER
    },
    assunto:{
        type: db.Sequelize.STRING
    },
    departamento:{
        type:db.Sequelize.STRING
    },
    cliente:{
        type:db.Sequelize.STRING
    },
    categoria:{
        type:db.Sequelize.STRING
    },
    data_chamado:{
        type:db.Sequelize.DATE
    },
    status:{
        type:db.Sequelize.STRING
    },
    situacao:{
        type:db.Sequelize.STRING
    },
    atendente:{
        type:db.Sequelize.STRING,
       
    }
})
//Chamados.sync({force: true}) para forçar a criação da tabela