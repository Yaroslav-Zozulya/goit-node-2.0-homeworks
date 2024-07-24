import { authService } from '../services/auth.js';

const setupSessionCookies = (res, session) => {
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expire: 7 * 24 * 60 * 60,
  });
  res.cookie('sessionToken', session.refreshToken, {
    httpOnly: true,
    expire: 7 * 24 * 60 * 60,
  });
};

const register = async (req, res) => {
  const newUser = await authService.register(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: newUser,
  });
};

const login = async (req, res) => {
  const session = await authService.login(req.body);

  setupSessionCookies(res, session);

  res.json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export const authController = {
  register,
  login,
};
