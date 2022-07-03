const taskRoute = require('./src/routes');

const PORT = 3001;
const express = require('express');
const app = express();

app.use(express.json());
app.use('/task', taskRoute);

app.listen(PORT, () => console.log(`Rodando em: http://localhost:${PORT}`));
