import express from 'express';
import UserController from './controllers/UserController';
import CategoryController from './controllers/CategoryController';

const routes = express.Router();

routes.post('/user', UserController.create);

routes.post('/category', CategoryController.create);

routes.get('/categories', CategoryController.index);

export default routes;