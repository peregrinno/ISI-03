const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();

// Configuração do banco de dados
const pool = new Pool({
  user: 'postgres',
  password: 'De1a8',
  host: 'localhost',
  database: 'celulares',
  port: 5432,
});

// Configuração do servidor
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Rota principal
app.get('/', (req, res) => {
  pool.query('SELECT * FROM celulares', (error, results) => {
    if (error) throw error;
    res.render('celulares', { celulares: results.rows });
  });
});

// Rota para adicionar um novo celular
app.post('/celulares', (req, res) => {
  const celular = req.body;
  pool.query('INSERT INTO celulares (id, nome, valor, imagem, especificacao) VALUES (default, $1, $2, $3, $4)', [celular.nome, celular.valor, celular.imagem, celular.especificacao], (error, results) => {
    if (error) throw error;
    res.redirect('/');
  });
});

// Rota para atualizar um celular existente
app.put('/celulares/:id', (req, res) => {
  const id = req.params.id;
  const celular = req.body;
  pool.query('UPDATE celulares SET nome = $1, valor = $2, imagem =$3, especificacao = $4 WHERE id = $5', [celular.nome, celular.valor, celular.imagem, celular.especificacao, id], (error, results) => {
    if (error) throw error;
    res.redirect('/');
  });
});

// Rota para excluir um celular
app.delete('/celulares/:id', (req, res) => {
  const id = req.params.id;
  pool.query('DELETE FROM celulares WHERE id = $1', [id], (error, results) => {
    if (error) throw error;
    res.redirect('/');
  });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
