import express from 'express';

import './database/connection';

const app = express();

app.use(express.json())

// Rota = conjunto
// Recurso = usúario
// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (Lista, Item)
// POST = Criando uma informação
// PUT = Editar uma informação
// DELETE = Deletar uma informação

// Query Params: http://localhost:3333/users?search=joao&
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users/

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello World' })
});

app.listen(3333);
