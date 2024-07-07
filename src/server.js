import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import contactsRouter from './routes/contactsRouter.js';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

export const setupServer = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  try {
    app.use('/', contactsRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const PORT = env(ENV_VARS.PORT, 5000);
    await app.listen(PORT);
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
