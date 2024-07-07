import { ContactsModel } from '../db/models/contactsModel.js';

const getAll = async () => {
  return await ContactsModel.find();
};

const getById = async (id) => {
  return await ContactsModel.findById(id);
};

const create = async (payload) => {
  return await ContactsModel.create(payload);
};

const updateById = async (contactId, payload) => {
  return await ContactsModel.findOneAndUpdate({ _id: contactId }, payload, {
    new: true,
  });
};

const deleteById = async (contactId) => {
  return await ContactsModel.findOneAndDelete({ _id: contactId });
};

export const contactsService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
