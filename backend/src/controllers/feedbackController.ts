import { Request, Response } from 'express';
import { Location } from '../models/index.js';
import { asyncHandler } from '../middleware/errorHandler.js';

import { triggerIngestion } from './ingestController.js';
import { mlService } from '../services/mlService.js';

export const feedBackResponse = (satisfied : boolean)=> {
  if(!satisfied) {
    triggerIngestion;
    mlService.triggerForecast;
  }
}