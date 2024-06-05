import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await writeFile(PATH_DB, JSON.stringify([], null, 2));
  } catch (error) {
    console.error(error.message);
  }
};

await removeAllContacts();
