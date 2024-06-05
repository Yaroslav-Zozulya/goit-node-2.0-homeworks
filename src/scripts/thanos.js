import { PATH_DB } from '../constants/contacts.js';
import { readFile, writeFile } from 'fs/promises';
export const thanos = async () => {
  const contacts = JSON.parse(await readFile(PATH_DB, { encoding: 'utf-8' }));
  const updateContacts = contacts.filter(() => Math.random() > 0.5);
  await writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2));
};

await thanos();
