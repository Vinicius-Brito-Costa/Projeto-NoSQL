module.exports = {
    conexao: function(){
        const mysql = require('mysql2');
        const con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'fullstack'
        })
        con.connect((erro) => {
            if(erro){
                console.log('A conexão com banco de dados falhou. ' + erro);
            }
            else{
                console.log('Conexão com banco de dados realizada com sucesso.');
            }
        })
        return con;
    },
    produtos: function(conexao, resposta){
        conexao.query('select * from produtos left outer join produtos_categorizados on produtos.id_produto = produtos_categorizados.id_produto left outer join categorias on produtos_categorizados.id_categoria = categorias.id_categoria left outer join sub_categorias on produtos_categorizados.id_sub_categoria = sub_categorias.id_sub_categoria order by produtos.id_produto asc;', (erro, resultado) =>{
            resposta.end(JSON.stringify(resultado));
        });
    },
    produtos_destaque: function(conexao, resposta){
        conexao.query('select * from produtos left outer join produtos_categorizados on produtos.id_produto = produtos_categorizados.id_produto left outer join categorias on produtos_categorizados.id_categoria = categorias.id_categoria left outer join sub_categorias on produtos_categorizados.id_sub_categoria = sub_categorias.id_sub_categoria where promocao > 0 order by rand() limit 4;', (erro, resultado) =>{
            resposta.end(JSON.stringify(resultado));
        });
    },
    enviar_compra: function(conexao, resposta, post){
        let frete = 10;
        let usuario = "Usuario Padrão";
        let endereco = post.endereco;
        let numero = post.numero;
        let cidade = post.cidade;
        let estado = post.estado;
        let cep = post.cep;
        let telefone = post.telefone;
        let id_produto = post.id_produto;
        let valor_unitario = post.valor_unitario;
        let quantidade = post.quantidade;
        let valor_total = (valor_unitario * quantidade) + frete;
        let sql = `INSERT INTO pedidos VALUES (null, '${usuario}', '${endereco}','${numero}', '${cidade}', '${estado}', '${cep}', '${telefone}', '${id_produto}', '${valor_unitario}', '${quantidade}', '${valor_total}');`;
        console.log(sql)
        conexao.query(sql)
    },
    enviar_mensagem: function(conexao, resposta, post){
        let nome = post.nome;
        let email = post.email;
        let mensagem = post.mensagem;

        let sql = `INSERT INTO feedback (id_mensagem, usuario, mensagem, email, dia) VALUES (null, '${nome}', '${mensagem}', '${email}', now());`
        conexao.query(sql);
    }
}
