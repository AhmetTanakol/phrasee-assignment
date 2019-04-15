import { NextFunction , Request, Response } from 'express';
import fs from 'fs';
import { chain, groupBy } from 'lodash';

export const get = (req: Request, res: Response, next: NextFunction) => {
    fs.readFile('notifications-feed.json', 'utf8', (err: Error, data: any) => {
        if (err) {
            next(err);
            return;
        }
        const notifications = JSON.parse(data);
        const groupedNotifications = chain(notifications)
                                    .groupBy('post.id')
                                    .mapValues(notifDetails => groupBy(notifDetails, 'type'));
        res.status(200).send(groupedNotifications);
    });
};
