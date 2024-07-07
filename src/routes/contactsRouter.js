import { Router } from 'express';
import { contactsController } from '../controllers/contactsController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = new Router();

contactsRouter.get('/contacts', ctrlWrapper(contactsController.getAll));
contactsRouter.get('/contacts/:id', ctrlWrapper(contactsController.getById));
contactsRouter.post('/contacts', ctrlWrapper(contactsController.create));
contactsRouter.patch(
  '/contacts/:contactId',
  ctrlWrapper(contactsController.updateById),
);
contactsRouter.delete(
  '/contacts/:contactId',
  ctrlWrapper(contactsController.deleteById),
);

export default contactsRouter;
