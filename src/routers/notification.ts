import express from 'express';
import * as controllers from '../controllers/notification';

const router: express.Router = express.Router();

router.route('/')
    .get(controllers.get);

export { router as notificationRouter };
