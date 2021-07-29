var db = openDatabase("Meubanco","2.0","Mybase",4048);
db.transaction(function(criar){
    criar.executeSql("CREATE TABLE novo_chamado (id INTEGER PRIMARY KEY, cliente TEXT, departamento TEXT, categoria TEXT, assunto TEXT, mensagem TEXT, prioridade TEXT, atendente TEXT)");
    criar.executeSql("CREATE TABLE atendentes (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT, permissao TEXT)");
});

function salvar(){
  var cliente = document.getElementById('cliente').value;
  var departamento = document.getElementById('departamento').value;
  var categoria = document.getElementById('categoria').value;
  var assunto = document.getElementById('assunto').value;
  var mensagem = document.getElementById('mensagem').value;
  var prioridade = document.getElementById('prioridade').value;
  var atendente = document.getElementById('atendente').value;
  db.transaction(function(armazenar){
      armazenar.executeSql("INSERT INTO novo_chamado (cliente,departamento,categoria,assunto,mensagem,prioridade,atendente) VALUES (?,?,?,?,?,?,?)",[cliente,departamento,categoria,assunto,mensagem,prioridade,atendente]);
  });
}

db.transaction(function(criar){
    criar.executeSql("CREATE TABLE atendentes (id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha TEXT, permissao TEXT)");
});
function salvar_atendente(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var permissao = document.getElementById('permissao').value;
    db.transaction(function(add_atendente){
        add_atendente.executeSql("INSERT INTO atendentes (nome,email,senha,permissao) VALUES (?,?,?,?)",[nome,email,senha,permissao]);
    });
}