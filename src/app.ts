import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { notificationRouter } from './routers/notification';

export const startApplication = async (): Promise<Express.Application> => {
    const app: express.Application = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    /*
     * Application Routes
    */
    app.use('/notifications', notificationRouter);

    return app;
};
