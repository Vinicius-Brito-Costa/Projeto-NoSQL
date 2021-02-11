const con = require('./conexao');
const {inserirComentario, pegarComentarios} = require('./comentarios');
const conexao = con.conexao();
const express = require('express');
const exp = express();
let body_parser = require('body-parser');
const cors = require('cors');


exp.set('view engine', 'ejs');
exp.use(body_parser.json());
exp.use(express.static('./build'))
exp.use(cors());
exp.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

let servidor = exp.get('/apiProdutos', (requisitar, resposta) => {
    con.produtos(conexao, resposta);
})
exp.get('/apiProdutos_destaque', (requisitar, resposta) => {
    con.produtos_destaque(conexao, resposta);
})
/*exp.get('/enviar_compra', (requisitar, resposta) => {
    console.log("ihuu");
})*/
exp.post('/apiEnviar_compra', (requisitar, resposta) => {
    con.enviar_compra(conexao, resposta, requisitar.body);
    console.log(requisitar.body)
})
exp.post('/apiEnviar_mensagem', async (requisitar, resposta) => {
    let post = requisitar.body;
    let comentario = {
        usuario: post.nome,
        mensagem: post.mensagem,
        email: post.email,
        dia: new Date().toLocaleDateString()
    }
    const resultado = await inserirComentario(comentario);
    resposta.send(resultado);
})
exp.get('/pegarComentarios', async (requisitar, resposta) => {
    let resultado = await pegarComentarios();
    resposta.send(resultado);
})
let porta = 8080;

servidor.listen(porta);
