import createHttpError from 'http-errors';
import { contactsService } from '../services/contacts.js';

const getAll = async (req, res) => {
  const contacts = await contactsService.getAll();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

const getById = async (req, res) => {
  const { id } = req.params;

  const contact = await contactsService.getById(id);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data: contact,
  });
};

const create = async (req, res) => {
  const newContact = await contactsService.create(req.body);
  res.status(201).json({
    status: 201,
    message: 'Contact successfully found!',
    data: newContact,
  });
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const updateContact = await contactsService.updateById(contactId, req.body);

  if (!updateContact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: 'Contact successfully update!',
    data: updateContact,
  });
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await contactsService.deleteById(contactId);

  if (!deletedContact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(204).json();
};

export const contactsController = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
