import { Router } from 'express';

import { authController } from '../controllers/authController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerSchema, loginSchema } from '../validation/authSchemas.js';

const authRouter = new Router();

authRouter.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(authController.register),
);

authRouter.post(
  '/login',
  validateBody(loginSchema),
  ctrlWrapper(authController.login),
);

export default authRouter;
