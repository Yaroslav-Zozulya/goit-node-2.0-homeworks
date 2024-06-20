import { Router } from 'express';
import { contactsController } from '../controllers/contactsController.js';

const contactsRouter = new Router();

contactsRouter.get('/contacts', contactsController.getAll);
contactsRouter.get('/contacts/:id', contactsController.getById);

export default contactsRouter;
