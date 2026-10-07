import { Router } from 'express';
import {
  feedBackResponse
} from '../controllers/feedbackController.js';
import { subscribeValidation, alertValidation } from '../middleware/validation.js';

const router = Router();

router.post('/feedback', feedBackResponse);

export default router;
