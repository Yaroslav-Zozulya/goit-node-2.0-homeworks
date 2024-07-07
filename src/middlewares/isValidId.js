import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req, res, next) => {
  const { contactId } = req.params;

  const error = isValidObjectId(contactId);
  if (!error) throw createHttpError(400, `Invalid id - ${contactId}`);
  next();
};
