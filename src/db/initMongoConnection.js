import mongoose from 'mongoose';

import { env } from '../utils/env.js';
import { ENV_VARS } from '../constants/index.js';

export const initMongoConnection = async () => {
  const MONGODB_USER = env(ENV_VARS.MONGODB_USER);
  const MONGODB_PASSWORD = env(ENV_VARS.MONGODB_PASSWORD);
  const MONGODB_URL = env(ENV_VARS.MONGODB_URL);
  const MONGODB_DB = env(ENV_VARS.MONGODB_DB);

  try {
    await mongoose.connect(
      `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}`,
    );
    console.log('Database connected success!');
  } catch (error) {
    console.log(error);
    throw error;
  }
};
