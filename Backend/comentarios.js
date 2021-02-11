const MongoClient = require('mongodb').MongoClient;
let log = console.log;
const url = 'mongodb://localhost:27017';

const banco = 'fullstackComentarios';

let client, db, comentariosCollection;

async function conectar() {
    client = await MongoClient.connect(url);
    db = client.db(banco);
    comentariosCollection = db.collection('comentarios');
}

async function inserirComentario (comentario){
    await conectar();
    const result = await comentariosCollection.insertOne(comentario);
    log('Comentario inserido no banco de dados.')
    client.close();
    return result;
}

async function pegarComentarios(){
    await conectar();
    const result = await comentariosCollection.find();
    const resultado = [];
    await result.forEach((comment) => {
        resultado.push(comment);
    });
    client.close();
    return resultado;
}

module.exports = {
    pegarComentarios, inserirComentario
}