const express = require('express');
const cors = require ('cors');
const path = require('path');
// importando rotas do sistema //
const authRouts = require ('./routes/auth.js');

const app = express();
const PORT = 3001;

// Use Middlewares Principais //
app.use (cors())
app.use (express.json) // Escreve e Ler requisições no formato json //

app.use(express.static(path.join(__dirname, '..', './frontend')));

app.use("/api", authRouts)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', './frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor Rodando em http://localhost:${PORT}`);
});