import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { UsersModel } from '../db/models/userModal.js';
import { sessionService } from './session.js';

const register = async (payload) => {
  const { email, password } = payload;

  const user = await UsersModel.findOne({ email });
  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await UsersModel.create({
    ...payload,
    password: hashedPassword,
  });

  return newUser.toJSON();
};

const login = async (payload) => {
  const { email, password } = payload;
  const user = await UsersModel.findOne({ email });
  if (!user) {
    throw createHttpError(409, 'Email or password is wrong');
  }

  const comparedPassword = await bcrypt.compare(password, user.password);
  if (!comparedPassword) {
    throw createHttpError(409, 'Email or password is wrong');
  }

  return await sessionService.create(user._id);
};

export const authService = {
  register,
  login,
};
