const express       = require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');

const app           = express();

const porta = 777;
app.use((requisitar, resposta, next) => {
    resposta.header('Access-Control-Allow-Origin', '*');
    resposta.header('Access-Control-Allow-Methods', '*');
    app.use(cors());
    next();
})
app.use(bodyParser.json())

let api = require('./conexao');

let conexao = api.conexao();

app.get('/produtos', (requisitar, resposta) => {
    api.produtos(conexao, resposta);
})
app.get('/produtos_destaque', (requisitar, resposta) => {
    api.produtos_destaque(conexao, resposta);
})
app.post('/enviar_compra', (requisitar, resposta) => {
    //resposta.send('Olá, Mundo!')
    api.enviar_compra(conexao, resposta, requisitar.body);
    console.log(requisitar.body)
})
app.listen(porta, () => {
    console.log(`Servidor ativo na porta ${porta}`);
})