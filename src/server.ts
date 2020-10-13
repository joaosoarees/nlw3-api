import express from 'express';
import { getRepository } from 'typeorm';
import Orphanages from './models/Orphanage';

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

app.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body;

  const orphanagesRepository = getRepository(Orphanages);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  return response.json({ message: 'Ok' })
});

app.listen(3333);
