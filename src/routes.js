import express from 'express';
import UserController from './controllers/UserController';
import CategoryController from './controllers/CategoryController';
import ProductController from './controllers/ProductController'
import SessionController from './controllers/SessionController'
import authMiddleware from './middlewares/authorization'

const routes = express.Router();

routes.post('/user', UserController.create);

routes.post('/category', CategoryController.create);
routes.get('/categories/:userId', CategoryController.index);

routes.post('/product', ProductController.create);
routes.get('/products/:userId', authMiddleware, ProductController.index);
routes.put('/product/:productId', ProductController.update);

routes.post('/auth', SessionController.auth);

export default routes;