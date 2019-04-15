import { startApplication } from './app';
import express from 'express';

const PORT = 8080;

startApplication().then((app: express.Application) => {
    app.listen(PORT, () => {
      console.log(`App is running at http://localhost:${PORT} in ${'development'} mode`);
      console.log('Press CTRL-C to stop\n');
    });
  }).catch((err: Error) => {
    console.log(err);
  });
