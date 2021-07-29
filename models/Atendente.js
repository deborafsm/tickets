const db = require('./db')
const Atendentes = db.sequelize.define('atendentes',{
    nome_atendente:{
        type: db.Sequelize.STRING
    },
    categoria:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    },
    permissao:{
        type: db.Sequelize.STRING
    },
    departamento:{
        type: db.Sequelize.STRING
    }

})
//Atendentes.sync({force: true})  forçar a criação da tabela