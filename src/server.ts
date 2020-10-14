import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333);

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