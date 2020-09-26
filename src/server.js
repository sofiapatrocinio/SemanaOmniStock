import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import './database';
import routes from './routes';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(
            cors({
                exposedHeaders: "x-auth-token",
        })
    );
    }

    routes() {
        this.app.use(routes);
    }
}

export default new App().app;