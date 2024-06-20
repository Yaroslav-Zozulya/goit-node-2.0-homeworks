import { ContactsModel } from '../db/models/contactsModel.js';

const getAll = async () => {
  return await ContactsModel.find();
};

const getById = async (id) => {
  return await ContactsModel.findById(id);
};

export const contactsService = {
  getAll,
  getById,
};
