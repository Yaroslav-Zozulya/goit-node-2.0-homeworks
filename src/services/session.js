import crypto from 'crypto';

import { SessionsModel } from '../db/models/sessionModel.js';

const create = async (userId) => {
  await SessionsModel.findOneAndDelete({ userId });

  const newSession = {
    userId,
    accessToken: crypto.randomBytes(40).toString('base64'),
    refreshToken: crypto.randomBytes(40).toString('base64'),
    accessTokenValidUntil: Date.now() + 1000 * 60 * 15, // 15 minutes,
    refreshTokenValidUntil: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days,
  };

  return await SessionsModel.create(newSession);
};

export const sessionService = {
  create,
};
