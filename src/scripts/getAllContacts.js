import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'fs/promises';

export const getAllContacts = async () => {
  try {
    return JSON.parse(await readFile(PATH_DB, { encoding: 'utf-8' }));
  } catch (error) {
    console.error(error.message);
  }
};

console.log(await getAllContacts());
