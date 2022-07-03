import { Router } from 'express';
import controller from '../controllers/task';

const taskRoute = Router();

taskRoute.get('/', controller.getAll);

export default taskRoute;
