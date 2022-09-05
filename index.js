const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(`rodando na porta ${port}`));
app.listen(port, () => console.log(`online na porta ${port}`));