const db = require('./db')

const Post = db.sequelize.define('postagens',{
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})
module.exports = Post //module.export = <nome_do_arquivo> faz com que esse model seja acessado através de outros arquivos.
//Post.sync({force: true}) forçar a criação da tabela