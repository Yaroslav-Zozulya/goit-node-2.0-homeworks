import { readFile, writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = JSON.parse(await readFile(PATH_DB, { encoding: 'utf-8' }));

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error.message);
  }
};

await generateContacts(5);
