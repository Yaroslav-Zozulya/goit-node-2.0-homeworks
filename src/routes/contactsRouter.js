import { Router } from 'express';
import { contactsController } from '../controllers/contactsController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contactSchemas.js';
import { isValidId } from '../middlewares/isValidId.js';

const contactsRouter = new Router();

contactsRouter.get('/contacts', ctrlWrapper(contactsController.getAll));
contactsRouter.get(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(contactsController.getById),
);
contactsRouter.post(
  '/contacts',
  validateBody(createContactSchema),
  ctrlWrapper(contactsController.create),
);
contactsRouter.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(contactsController.updateById),
);
contactsRouter.delete(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(contactsController.deleteById),
);

export default contactsRouter;
