import { contactsService } from '../services/contacts.js';

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsService.getAll();

    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const contact = await contactsService.getById(id);

    if (!contact) {
      res.status(404).json({
        status: 404,
        message: `Contacts with ${id} not found!`,
      });
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id ${id}!`,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

export const contactsController = {
  getAll,
  getById,
};
