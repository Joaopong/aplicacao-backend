const express = require('express');
const app = express();
const port = 25000;

const carros = [
    { marca: 'Ford', modelo: 'Mustang' },
    { marca: 'Ford', modelo: 'Fiesta' },
    { marca: 'Ford', modelo: 'Focus' }
];

app.get('/carros', (req, res) => {
    res.json(carros);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});