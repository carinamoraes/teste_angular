const express = require('express');
const path = require('path');

const app = express();

// Servir arquivos estáticos da pasta 'dist' do aplicativo Angular
app.use(express.static(__dirname + '/dist/angular-editor-fabric-js-app'));

// Rota padrão para o servidor: enviar o arquivo 'index.html' do aplicativo Angular
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/angular-editor-fabric-js-app/index.html'));
});

// Inicie o servidor na porta 8080
app.listen(process.env.PORT || 8080);