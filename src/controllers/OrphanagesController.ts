import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanages from '../models/Orphanage';

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanages);

    const orphanges = await orphanagesRepository.find();

    return response.json(orphanges);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanages);

    const orphange = await orphanagesRepository.findOneOrFail(id);

    return response.json(orphange);
  },

  async create(request: Request, response: Response) {
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

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename }
    });
  
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    });
  
    await orphanagesRepository.save(orphanage);
  
    return response.status(201).json(orphanage);
  },
};