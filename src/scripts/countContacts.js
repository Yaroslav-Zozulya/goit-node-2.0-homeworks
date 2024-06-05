import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'fs/promises';

export const countContacts = async () => {
  try {
    return JSON.parse(await readFile(PATH_DB)).length;
  } catch (error) {
    console.error(error.message);
  }
};

console.log(await countContacts());
