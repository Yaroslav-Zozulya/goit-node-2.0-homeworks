import { PATH_DB } from '../constants/contacts.js';
import { readFile, writeFile } from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = JSON.parse(await readFile(PATH_DB, { encoding: 'utf-8' }));
    contacts.push(createFakeContact());
    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error.message);
  }
};

await addOneContact();
