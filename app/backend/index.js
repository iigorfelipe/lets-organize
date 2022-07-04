const express = require('express');
const app = express();
const cors = require('cors');
const taskRoute = require('./src/routes');
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/', taskRoute);

app.listen(PORT, () => console.log(`Rodando em: http://localhost:${PORT}`));
