const express = require('express');
const server = express();
const filmes = require ('./src/data/filmes.json');

 server.get('/filmes', (req,res) => { // servidor
    return res.json(filmes) // "script":start:"nodemon" ./index.js", servidor atualaiza sem precisar atualizar cmd.
 });

server.listen(3000, () => {
    console.log('servidor esta funcionando')//porta host
});